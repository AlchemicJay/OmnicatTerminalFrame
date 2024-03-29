import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "He is everywhere"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmcBdVkQDNehTArcoXxnxfBfwMQ2L1wUZbaCqD1dbYUj8C/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Omnicat Terminal',
  description: 'Multichain Application Terminal',
  openGraph: {
    title: 'Omnicat Terminal',
    description: 'Multichain Application Terminal',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmcBdVkQDNehTArcoXxnxfBfwMQ2L1wUZbaCqD1dbYUj8C/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Omnicat Terminal</h1>
    </>
  );
}
