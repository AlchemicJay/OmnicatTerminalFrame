/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/omnicatterminal',
        destination: 'https://omnicat.xyz/terminal',
        permanent: false
      },
      {
        source: '/omnicatbase',
        destination: 'https://www.sushi.com/swap?chainId=8453&token0=NATIVE&token1=0xC48E605c7b722a57277e087a6170B9E227e5AC0A',
        permanent: false
      },
      {
        source: '/hackmd',
        destination: 'https://hackmd.io/@omnicat/BJmI6f0Pa',
        permanent: false
      }
    ]
  }
};

export default nextConfig;