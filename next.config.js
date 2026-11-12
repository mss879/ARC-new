/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out to enable API routes (SSR)
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gbkrwadxqzwuhhxmkfjb.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Disable trailing slashes
  trailingSlash: false,
  // Disable x-powered-by header
  poweredByHeader: false,
  // Output file tracing root
  outputFileTracingRoot: process.cwd(),
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    // Remove React properties for smaller bundle
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  // Target modern browsers only (no legacy JavaScript)
  modularizeImports: {
    '@phosphor-icons/react': {
      transform: '@phosphor-icons/react/dist/{{member}}',
    },
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
    },
  },
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        usedExports: true,
        sideEffects: false,
      };
    }
    return config;
  },
  // React strict mode for better performance
  reactStrictMode: true,
  // Exclude old Vite files from build
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint during builds to avoid config errors
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Move serverComponentsExternalPackages to top level (Next.js 15+)
  serverExternalPackages: ['sharp'],
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  // Experimental features for better performance
  experimental: {
    // Only use optimizePackageImports - compatible with static export
    optimizePackageImports: ['framer-motion', 'lucide-react', '@radix-ui/react-icons'],
    // Note: optimizeCss and optimizeFonts don't work with output: 'export'
  },
  // Additional performance optimizations
  compress: true,
  // Generate static pages at build time
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  // Add redirects for keyword cannibalization
  async redirects() {
    return [
      {
        source: '/blog/best-ai-companies-sri-lanka-2026',
        destination: '/ai-companies-sri-lanka',
        permanent: true,
      },
      {
        source: '/blog/software-company-sri-lanka',
        destination: '/software-companies-sri-lanka',
        permanent: true,
      },
      {
        source: '/blog/top-software-companies-sri-lanka',
        destination: '/software-companies-sri-lanka',
        permanent: true,
      },
      {
        source: '/blog/websites-vs-smart-websites-sri-lanka',
        destination: '/blog/smart-websites-sri-lanka-2026',
        permanent: true,
      },
      {
        source: '/blog/ai-automation-transform-business-2024',
        destination: '/ai-automation-sri-lanka',
        permanent: true,
      },
      {
        source: '/blog/workflow-automation-tools-2024',
        destination: '/ai-automation-sri-lanka',
        permanent: true,
      },
      // The Birmingham page described an office that does not exist. The site
      // is Sri Lanka-first; overseas clients are served remotely from Colombo.
      {
        source: '/ai-agency-birmingham',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
