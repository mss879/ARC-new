/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out to enable API routes (SSR)
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
}

export default nextConfig
