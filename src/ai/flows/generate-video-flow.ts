'use server';
/**
 * @fileOverview A flow to generate a video using Veo.
 */
import { googleAI } from '@genkit-ai/google-genai';
import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { MediaPart } from 'genkit';
import * as fs from 'fs';
import { Readable } from 'stream';


async function downloadVideo(video: MediaPart): Promise<string> {
  const fetch = (await import('node-fetch')).default;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable not set');
  }
  const videoDownloadResponse = await fetch(
    `${video.media!.url}&key=${apiKey}`
  );

  if (
    !videoDownloadResponse ||
    videoDownloadResponse.status !== 200 ||
    !videoDownloadResponse.body
  ) {
    throw new Error('Failed to fetch video');
  }

  const buffer = await videoDownloadResponse.arrayBuffer();
  const base64 = Buffer.from(buffer).toString('base64');
  return `data:video/mp4;base64,${base64}`;
}


const generateVideoFlow = ai.defineFlow(
  {
    name: 'generateVideoFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (prompt) => {
    console.log('Starting video generation...');
    let { operation } = await ai.generate({
      model: googleAI.model('veo-2.0-generate-001'),
      prompt,
      config: {
        durationSeconds: 8,
        aspectRatio: '16:9',
      },
    });

    if (!operation) {
      throw new Error('Expected the model to return an operation');
    }

    console.log('Video generation operation started. Polling for completion...');

    // Wait until the operation completes.
    while (!operation.done) {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log('Checking operation status...');
      operation = await ai.checkOperation(operation);
    }

    if (operation.error) {
      console.error('Video generation failed:', operation.error);
      throw new Error('failed to generate video: ' + operation.error.message);
    }

    console.log('Video generation completed.');
    const video = operation.output?.message?.content.find((p) => !!p.media);
    if (!video) {
      throw new Error('Failed to find the generated video');
    }

    const dataUri = await downloadVideo(video);
    console.log('Video downloaded and converted to data URI.');
    return dataUri;
  }
);


export async function generateVideo(prompt: string): Promise<string> {
    return await generateVideoFlow(prompt);
}
