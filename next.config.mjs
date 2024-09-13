import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/:path*',
      },
    ];
  },
};
export default MillionLint.next({
  rsc: true,
})(nextConfig);
