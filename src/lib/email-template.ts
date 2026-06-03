/**
 * Generates the HTML email for an AI-generated proposal.
 * ARC AI branded — ultra-premium, Apple-standard 3D/glassmorphism aesthetics.
 * Deep blacks, volumetric gradients, sharp typography, and sleek shadows.
 */

interface PackageInfo {
  name: string;
  price: string;
  monthly?: string;
  bestFor: string;
  features: string[];
  timeline: string;
  highlight?: boolean;
}

const WEB_PACKAGES: Record<string, PackageInfo> = {
  starter: {
    name: 'Starter',
    price: 'Rs 60,000',
    bestFor: 'Businesses that need a clean, professional web presence fast.',
    features: [
      'Modern responsive website (5 pages)',
      'Clean, minimal design — standard layouts',
      'WhatsApp button + contact/inquiry form',
      'Mobile-optimized & fast-loading',
      'Free hosting forever',
    ],
    timeline: '2–3 days',
  },
  launch: {
    name: 'Launch',
    price: 'Rs 90,000',
    bestFor: 'Businesses that want a stunning, conversion-focused website that stands out.',
    features: [
      'Everything in Starter, plus:',
      'Premium custom design with advanced animations',
      'Parallax scrolling, hover effects, micro-interactions',
      'Glassmorphism cards & bespoke hero section',
      'Video/animation support in hero',
      'Conversion-optimized layout with strategic CTAs',
      'Full SEO with structured data & meta tags',
    ],
    timeline: '3–5 days',
  },
  growth: {
    name: 'Growth',
    price: 'Rs 130,000',
    bestFor: 'Businesses that want a premium website plus a system to capture, track, and close more leads.',
    features: [
      'Everything in Launch, plus:',
      'Lead Dashboard — every inquiry in one place',
      'CRM pipeline (New → Contacted → Quoted → Won/Lost)',
      'Email capture + newsletter system',
      'Email campaigns — promos, updates, re-engagement',
    ],
    timeline: '5–7 days',
    highlight: true,
  },
  scale: {
    name: 'Scale',
    price: 'Rs 160,000',
    monthly: '$4/month AI fee',
    bestFor: 'Businesses that want everything in Growth plus an AI agent handling inquiries around the clock.',
    features: [
      'Everything in Growth, plus:',
      'AI agent integrated into your website',
      'Instant responses to visitor questions 24/7',
      'Handles common inquiries & guides users to action',
      'Improves response time and availability',
    ],
    timeline: '5–7 days',
  },
};

function renderPackageBlock(pkg: PackageInfo, index: number): string {
  const isHighlight = pkg.highlight;
  
  // 3D/Volumetric styling metrics
  // Base is dark, but the highlight package gets a deep, rich gradient with a subtle inner glow.
  const gradientBg = isHighlight 
      ? 'linear-gradient(145deg, #1c100d 0%, #0d0605 100%)' 
      : 'linear-gradient(145deg, #161617 0%, #080809 100%)';
  const fallbackBg = isHighlight ? '#1c100d' : '#161617';
  
  // Outer border with top-highlight to simulate a light source
  const borderColor = isHighlight ? '#FF4925' : 'rgba(255, 255, 255, 0.05)';
  const borderTopColor = isHighlight ? '#FF7B54' : 'rgba(255, 255, 255, 0.12)';
  
  // Subtle glass reflection on the inside
  const glassShadow = isHighlight
      ? 'box-shadow: 0 20px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,123,84,0.3);'
      : 'box-shadow: 0 15px 35px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05);';

  const badgeHtml = isHighlight
    ? `<div style="background: linear-gradient(135deg, #FF7B54 0%, #FF4925 100%); color: #ffffff; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(255,73,37,0.4);">Most Popular</div>`
    : '';

  const featuresHtml = pkg.features
    .map(f => `<tr><td style="padding: 10px 0; color: #a1a1a6; font-size: 14px; line-height: 1.6; border-bottom: 1px solid rgba(255,255,255,0.03);">
            <div style="display: inline-block; vertical-align: middle; width: 18px; height: 18px; border-radius: 50%; background: rgba(255,73,37,0.1); text-align: center; line-height: 18px; margin-right: 12px;">
                <span style="color: #FF4925; font-weight: bold; font-size: 10px;">✓</span>
            </div>
            <span style="vertical-align: middle;">${f}</span>
        </td></tr>`)
    .join('');

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: ${fallbackBg}; background-image: ${gradientBg}; border-radius: 24px; border: 1px solid ${borderColor}; border-top: 1px solid ${borderTopColor}; margin-bottom: 24px; overflow: hidden; ${glassShadow}">
        <tr><td style="padding: 40px 32px;">
            ${badgeHtml}
            <p style="margin: 0 0 6px 0; font-size: 11px; color: #FF4925; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">Option 0${index}</p>
            <h2 style="margin: 0 0 12px 0; font-size: 26px; color: #f5f5f7; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-weight: 600; letter-spacing: -0.5px;">${pkg.name}</h2>
            <p style="margin: 0 0 24px 0; font-size: 15px; color: #86868b; line-height: 1.6; font-weight: 400;">${pkg.bestFor}</p>

            <div style="background: rgba(0,0,0,0.4); border-radius: 16px; padding: 24px; margin-bottom: 28px; border: 1px solid rgba(255,255,255,0.03); box-shadow: inset 0 2px 10px rgba(0,0,0,0.2);">
                <p style="margin: 0; font-size: 36px; font-weight: 700; color: #ffffff; letter-spacing: -1px; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">${pkg.price}</p>
                ${pkg.monthly ? `<p style="margin: 6px 0 0 0; font-size: 13px; color: #FF7B54; font-weight: 500;">+ ${pkg.monthly}</p>` : ''}
                <p style="margin: 6px 0 0 0; font-size: 12px; color: #86868b; font-weight: 500;">One-time payment</p>
            </div>

            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${featuresHtml}
            </table>

            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.05);">
                <p style="margin: 0; font-size: 13px; color: #86868b; display: flex; align-items: center;">
                    <span style="color: #f5f5f7; font-weight: 600; margin-right: 6px;">Timeline:</span> ${pkg.timeline}
                    <span style="margin: 0 12px; color: rgba(255,255,255,0.1);">|</span>
                    <span style="color: #f5f5f7; font-weight: 600; margin-right: 6px;">Hosting:</span> Free forever
                </p>
            </div>
        </td></tr>
    </table>`;
}

// Package type definitions
type WebPackageKey = 'starter' | 'launch' | 'growth' | 'scale';
type AIPackageKey = 'flow' | 'engage' | 'qualify' | 'command';
type PackageKey = WebPackageKey | AIPackageKey | 'all';

const AI_PACKAGE_KEYS: string[] = ['flow', 'engage', 'qualify', 'command'];
const WEB_PACKAGE_KEYS: string[] = ['starter', 'launch', 'growth', 'scale'];

export function generateProposalEmail(
  name: string,
  company: string,
  selectedPackage: PackageKey
): string {
  // Route AI packages to the AI-specific email template
  if (AI_PACKAGE_KEYS.includes(selectedPackage)) {
    return generateAIProposalEmail(name, company, selectedPackage as AIPackageKey);
  }

  const year = new Date().getFullYear();
  const isAll = selectedPackage === 'all';

  const packagesToShow = isAll
    ? WEB_PACKAGE_KEYS
    : [selectedPackage];

  const packageBlocks = packagesToShow
    .map((key, i) => renderPackageBlock(WEB_PACKAGES[key], i + 1))
    .join('');

  // When 'all' is selected, also render AI packages
  const aiPackageBlocks = isAll
    ? AI_PACKAGE_KEYS.map((key, i) => renderAIPackageBlock(AI_PACKAGES[key], i + 1)).join('')
    : '';

  const selectedPkg = isAll ? null : WEB_PACKAGES[selectedPackage];
  const subjectLine = isAll ? 'Your Complete Proposal' : `${selectedPkg?.name} Executive Proposal`;

  // Build the combined packages section for 'all'
  const allPackagesHtml = isAll
    ? `<p style="margin: 8px 0 24px 0; font-size: 15px; color: #86868b; line-height: 1.6;">Below you'll find our Website packages and AI System packages. Each tier builds upon the previous one.</p>
       <p style="margin: 0 0 16px 0; font-size: 18px; color: #f5f5f7; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">🌐 Website Packages</p>
       ${packageBlocks}
       <div style="height: 1px; background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(59,130,246,0.5) 50%, rgba(255,255,255,0) 100%); margin: 32px 0;"></div>
       <p style="margin: 0 0 16px 0; font-size: 18px; color: #f5f5f7; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">🤖 AI System Packages</p>
       ${aiPackageBlocks}`
    : packageBlocks;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subjectLine} — ARC AI</title>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
    
    <!-- Outer wrapper to allow shadow/depth of main container -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; padding: 40px 10px;">
        <tr><td align="center">
            
            <!-- Main Content Container with Premium Apple 3D glassmorphism feel -->
            <table role="presentation" width="680" cellpadding="0" cellspacing="0" style="background-color: #0a0a0b; background-image: linear-gradient(180deg, #121214 0%, #050505 100%); border-radius: 32px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06); border-top: 1px solid rgba(255,255,255,0.15); box-shadow: 0 40px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05);">

                <!-- Header -->
                <tr><td style="padding: 50px 48px 40px 48px; position: relative;">
                    <!-- Ambient Glow Effect behind header -->
                    <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 300px; height: 100px; background: radial-gradient(ellipse at top, rgba(255,73,37,0.15) 0%, rgba(0,0,0,0) 70%); pointer-events: none;"></div>
                    
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="position: relative; z-index: 1;">
                                <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 2px; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                    ARC <span style="background: linear-gradient(135deg, #FF7B54 0%, #FF4925 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: #FF4925;">AI</span>
                                </h1>
                                <p style="margin: 8px 0 0 0; font-size: 11px; color: #86868b; letter-spacing: 2px; text-transform: uppercase; font-weight: 600;">
                                    Beyond Visuals. Built with Vision.
                                </p>
                            </td>
                            <td style="text-align: right; vertical-align: top; position: relative; z-index: 1;">
                                <div style="display: inline-block; background: rgba(255,255,255,0.03); padding: 8px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                                    <p style="margin: 0; font-size: 10px; color: #a1a1a6; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;">Proposal</p>
                                    <p style="margin: 2px 0 0 0; font-size: 11px; color: #f5f5f7; font-weight: 500;">${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </td></tr>

                <!-- Soft Divider -->
                <tr><td style="padding: 0 48px;">
                    <div style="height: 1px; background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,73,37,0.5) 50%, rgba(255,255,255,0) 100%);"></div>
                </td></tr>

                <!-- Overview Section -->
                <tr><td style="padding: 40px 48px 10px 48px;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; color: #FF4925; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">01 — Overview</p>
                    <h2 style="margin: 0 0 16px 0; font-size: 28px; color: #f5f5f7; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; letter-spacing: -0.5px;">
                        Executive Proposal for ${company}
                    </h2>
                    <p style="margin: 0; font-size: 16px; color: #a1a1a6; line-height: 1.8; font-weight: 400;">
                        Hi <strong style="color: #ffffff; font-weight: 600;">${name}</strong>, thank you for considering ARC AI. 
                        This strategic proposal outlines an ultra-premium, conversion-engineered digital ecosystem designed to flawlessly establish your brand, 
                        streamline client acquisition, and architect a highly scalable foundation for <strong style="color: #ffffff; font-weight: 600;">${company}</strong>'s future growth.
                    </p>
                </td></tr>

                <!-- Objectives Section -->
                <tr><td style="padding: 40px 48px 10px 48px;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; color: #FF4925; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">02 — Core Objectives</p>
                    
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%); border-radius: 20px; border: 1px solid rgba(255,255,255,0.04); margin-top: 16px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);">
                        <tr><td style="padding: 24px 32px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr><td style="padding: 10px 0; color: #d2d2d7; font-size: 15px;"><span style="color: #FF7B54; margin-right: 12px; font-weight: bold;">→</span>Establish a defining, premium online presence</td></tr>
                                <tr><td style="padding: 10px 0; color: #d2d2d7; font-size: 15px;"><span style="color: #FF7B54; margin-right: 12px; font-weight: bold;">→</span>Engineer a frictionless inquiry submission trajectory</td></tr>
                                <tr><td style="padding: 10px 0; color: #d2d2d7; font-size: 15px;"><span style="color: #FF7B54; margin-right: 12px; font-weight: bold;">→</span>Amplify trust and definitive credibility through world-class design</td></tr>
                                <tr><td style="padding: 10px 0; color: #d2d2d7; font-size: 15px;"><span style="color: #FF7B54; margin-right: 12px; font-weight: bold;">→</span>Accelerate response velocity via centralized contact structuring</td></tr>
                                <tr><td style="padding: 10px 0; color: #d2d2d7; font-size: 15px;"><span style="color: #FF7B54; margin-right: 12px; font-weight: bold;">→</span>Architect a highly scalable digital foundation for unhindered growth</td></tr>
                            </table>
                        </td></tr>
                    </table>
                </td></tr>

                <!-- Package(s) Section -->
                <tr><td style="padding: 40px 48px 10px 48px;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; color: #FF4925; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">03 — ${isAll ? 'Strategic Tier Options' : 'Recommended Blueprint'}</p>
                    ${allPackagesHtml}
                </td></tr>

                <!-- Timeline Section -->
                <tr><td style="padding: 30px 48px 20px 48px;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; color: #FF4925; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">04 — Project Velocity</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top: 16px; background: rgba(0,0,0,0.5); border-radius: 20px; border: 1px solid rgba(255,255,255,0.04); overflow: hidden; box-shadow: inset 0 2px 10px rgba(0,0,0,0.3);">
                        <tr>
                            <td style="width: 25%; padding: 24px 12px; border-right: 1px solid rgba(255,255,255,0.03); text-align: center;">
                                <p style="margin: 0; font-size: 24px; color: #f5f5f7; font-weight: 700; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">01</p>
                                <p style="margin: 8px 0 0 0; font-size: 11px; color: #a1a1a6; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Strategy</p>
                                <p style="margin: 4px 0 0 0; font-size: 12px; color: #FF4925; font-weight: 500;">Day 1–2</p>
                            </td>
                            <td style="width: 25%; padding: 24px 12px; border-right: 1px solid rgba(255,255,255,0.03); text-align: center;">
                                <p style="margin: 0; font-size: 24px; color: #f5f5f7; font-weight: 700; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">02</p>
                                <p style="margin: 8px 0 0 0; font-size: 11px; color: #a1a1a6; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Design</p>
                                <p style="margin: 4px 0 0 0; font-size: 12px; color: #FF4925; font-weight: 500;">Day 2–3</p>
                            </td>
                            <td style="width: 25%; padding: 24px 12px; border-right: 1px solid rgba(255,255,255,0.03); text-align: center;">
                                <p style="margin: 0; font-size: 24px; color: #f5f5f7; font-weight: 700; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">03</p>
                                <p style="margin: 8px 0 0 0; font-size: 11px; color: #a1a1a6; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Build</p>
                                <p style="margin: 4px 0 0 0; font-size: 12px; color: #FF4925; font-weight: 500;">Day 3–5</p>
                            </td>
                            <td style="width: 25%; padding: 24px 12px; text-align: center;">
                                <p style="margin: 0; font-size: 24px; color: #f5f5f7; font-weight: 700; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">04</p>
                                <p style="margin: 8px 0 0 0; font-size: 11px; color: #a1a1a6; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Launch</p>
                                <p style="margin: 4px 0 0 0; font-size: 12px; color: #FF4925; font-weight: 500;">Day 5–7</p>
                            </td>
                        </tr>
                    </table>
                </td></tr>

                <!-- Investment Terms Section -->
                <tr><td style="padding: 30px 48px 10px 48px;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; color: #FF4925; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">05 — Terms of Investment</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%); border-radius: 20px; border: 1px solid rgba(255,255,255,0.04); margin-top: 16px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);">
                        <tr><td style="padding: 24px 32px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding: 12px 0; color: #a1a1a6; font-size: 14px; width: 35%; font-weight: 500;">Payment Structure</td>
                                    <td style="padding: 12px 0; color: #f5f5f7; font-size: 14px; font-weight: 600;">70% initiation · 30% upon conclusive delivery</td>
                                </tr>
                                <tr><td colspan="2" style="border-bottom: 1px solid rgba(255,255,255,0.03);"></td></tr>
                                <tr>
                                    <td style="padding: 12px 0; color: #a1a1a6; font-size: 14px; font-weight: 500;">Hosting Infrastructure</td>
                                    <td style="padding: 12px 0; color: #f5f5f7; font-size: 14px; font-weight: 600;">Provided free forever (up to 1GB tier)</td>
                                </tr>
                                <tr><td colspan="2" style="border-bottom: 1px solid rgba(255,255,255,0.03);"></td></tr>
                                <tr>
                                    <td style="padding: 12px 0; color: #a1a1a6; font-size: 14px; font-weight: 500;">Domain Authority</td>
                                    <td style="padding: 12px 0; color: #f5f5f7; font-size: 14px; font-weight: 600;">Client-managed autonomously</td>
                                </tr>
                            </table>
                        </td></tr>
                    </table>
                </td></tr>

                <!-- Maintenance Section -->
                <tr><td style="padding: 30px 48px 20px 48px;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; color: #FF4925; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">06 — Ongoing Excellence</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top: 16px;">
                        <tr>
                            <td style="width: 50%; padding: 0 12px 0 0; vertical-align: top;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%); border-radius: 20px; border: 1px solid rgba(255,255,255,0.04); border-top: 1px solid rgba(255,255,255,0.08); box-shadow: 0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.02);">
                                    <tr><td style="padding: 28px;">
                                        <p style="margin: 0 0 8px 0; font-size: 16px; color: #f5f5f7; font-weight: 600;">Annual Care Plan</p>
                                        <p style="margin: 0 0 16px 0; font-size: 26px; color: #FF4925; font-weight: 700; letter-spacing: -0.5px;">Rs 60,000<span style="font-size: 13px; color: #a1a1a6; font-weight: 500;">/yr</span></p>
                                        <p style="margin: 0; font-size: 13px; color: #86868b; line-height: 1.6;">Continuous security protocols, 99.9% uptime monitoring, fortified backups, standard content deployments & optimization fixes.</p>
                                    </td></tr>
                                </table>
                            </td>
                            <td style="width: 50%; padding: 0 0 0 12px; vertical-align: top;">
                                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%); border-radius: 20px; border: 1px solid rgba(255,255,255,0.04); border-top: 1px solid rgba(255,255,255,0.08); box-shadow: 0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.02);">
                                    <tr><td style="padding: 28px;">
                                        <p style="margin: 0 0 8px 0; font-size: 16px; color: #f5f5f7; font-weight: 600;">On-Demand Expertise</p>
                                        <p style="margin: 0 0 16px 0; font-size: 26px; color: #FF4925; font-weight: 700; letter-spacing: -0.5px;">Rs 4,000<span style="font-size: 13px; color: #a1a1a6; font-weight: 500;">/req</span></p>
                                        <p style="margin: 0; font-size: 13px; color: #86868b; line-height: 1.6;">Surgical bug resolution, sophisticated UI refinements, bespoke text/media updates, and intricate link structuring.</p>
                                    </td></tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td></tr>

                <!-- Enhanced CTA Section -->
                <tr><td style="padding: 40px 48px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(145deg, rgba(255,73,37,0.1) 0%, rgba(255,73,37,0.02) 100%); border-radius: 24px; border: 1px solid rgba(255,73,37,0.2); box-shadow: 0 15px 35px rgba(255,73,37,0.05), inset 0 1px 0 rgba(255,123,84,0.1);">
                        <tr><td style="padding: 40px; text-align: center;">
                            <p style="margin: 0 0 12px 0; font-size: 22px; color: #ffffff; font-weight: 700; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">Initiate Your Digital Transformation</p>
                            <p style="margin: 0 0 28px 0; font-size: 15px; color: #a1a1a6; line-height: 1.6;">Secure a 30-minute strategic brief with our engineering intelligence team.</p>
                            
                            <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                                <tr>
                                    <td style="border-radius: 12px; background: linear-gradient(135deg, #FF7B54 0%, #FF4925 100%); box-shadow: 0 8px 24px rgba(255,73,37,0.4), inset 0 1px 0 rgba(255,255,255,0.4);">
                                        <a href="https://calendly.com/arcai-support/30min" style="display: block; padding: 16px 40px; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 15px; letter-spacing: 0.5px; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                            Schedule Strategy Call &nbsp;→
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td></tr>
                    </table>
                </td></tr>

                <!-- Minimalist Footer -->
                <tr><td style="padding: 30px 48px 40px 48px; border-top: 1px solid rgba(255,255,255,0.03);">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td>
                                <p style="margin: 0; font-size: 12px; color: #86868b; font-weight: 500;">
                                    © ${year} ARC AI (Pvt) Ltd. All rights reserved.
                                </p>
                                <p style="margin: 6px 0 0 0; font-size: 11px; color: #55555a;">
                                    Colombo 4, Sri Lanka &nbsp;&middot;&nbsp; Birmingham, UK
                                </p>
                            </td>
                            <td style="text-align: right; vertical-align: middle;">
                                <a href="https://www.arcai.agency" style="color: #FF4925; font-size: 13px; text-decoration: none; font-weight: 600; padding-bottom: 2px; border-bottom: 1px solid rgba(255,73,37,0.3);">arcai.agency</a>
                            </td>
                        </tr>
                    </table>
                </td></tr>

            </table>
        </td></tr>
    </table>
</body>
</html>`;
}

// ═══════════════════════════════════════════════════════════════════════════
// AI PACKAGES EMAIL TEMPLATE
// ═══════════════════════════════════════════════════════════════════════════

interface AIPackageInfo {
  name: string;
  price: string;
  monthly: string;
  bestFor: string;
  features: string[];
  timeline: string;
  highlight?: boolean;
}

const AI_PACKAGES: Record<string, AIPackageInfo> = {
  flow: {
    name: 'Flow',
    price: 'Rs 75,000',
    monthly: 'Rs 10,000/month',
    bestFor: 'Small businesses that want to reduce admin and improve efficiency.',
    features: [
      'Automation for one key business process',
      'Data pulled from receipts, forms, or documents',
      'Automatic updates to Google Sheets or your internal system',
      'Alerts and notifications when action is needed',
      'A simple internal AI assistant to help find information quickly',
    ],
    timeline: '1–2 weeks',
  },
  engage: {
    name: 'Engage',
    price: 'Rs 135,000',
    monthly: 'Rs 15,000/month',
    bestFor: 'Businesses that get website traffic and want a better way to handle enquiries and convert more leads.',
    features: [
      'Everything in Flow, plus:',
      'AI chat assistant for your website',
      'Answers based on your services and business information',
      'Lead capture and qualification',
      'Appointment booking integration',
      'Enquiry details sent to your team or CRM',
      'Basic reporting so you can track performance',
    ],
    timeline: '2–3 weeks',
    highlight: true,
  },
  qualify: {
    name: 'Qualify',
    price: 'Rs 195,000',
    monthly: 'Rs 24,000/month',
    bestFor: 'Businesses with a regular flow of leads that need quicker response times and better follow-up.',
    features: [
      'Everything in Engage, plus:',
      'AI voice assistant for inbound or outbound calls',
      'Automated lead qualification over the phone',
      'Follow-up by SMS or email',
      'Call notes and summaries after each interaction',
      'Lead details updated directly into your system',
    ],
    timeline: '3–5 weeks',
  },
  command: {
    name: 'Command',
    price: 'Rs 310,000',
    monthly: 'Rs 45,000/month',
    bestFor: 'Growing businesses and agencies that want a complete AI-powered sales and operations system.',
    features: [
      'Everything in Qualify, plus:',
      'AI chat and voice working together seamlessly',
      'Automated complex follow-up sequences',
      'Sales support tools for your team',
      'Lead research and pre-call preparation',
      'Custom integrations with your forms, CRM, calendar, and workflows',
      'Executive dashboards and reporting for better decision-making',
    ],
    timeline: '6–8 weeks',
  },
};

function renderAIPackageBlock(pkg: AIPackageInfo, index: number): string {
  const isHighlight = pkg.highlight;
  const gradientBg = isHighlight
      ? 'linear-gradient(145deg, #0d0f1c 0%, #060610 100%)'
      : 'linear-gradient(145deg, #161617 0%, #080809 100%)';
  const fallbackBg = isHighlight ? '#0d0f1c' : '#161617';
  const borderColor = isHighlight ? '#3B82F6' : 'rgba(255, 255, 255, 0.05)';
  const borderTopColor = isHighlight ? '#60A5FA' : 'rgba(255, 255, 255, 0.12)';
  const glassShadow = isHighlight
      ? 'box-shadow: 0 20px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(96,165,250,0.3);'
      : 'box-shadow: 0 15px 35px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05);';
  const accentColor = '#3B82F6';
  const accentLight = '#60A5FA';

  const badgeHtml = isHighlight
    ? `<div style="background: linear-gradient(135deg, ${accentLight} 0%, ${accentColor} 100%); color: #ffffff; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(59,130,246,0.4);">Most Popular</div>`
    : '';

  const featuresHtml = pkg.features
    .map(f => `<tr><td style="padding: 10px 0; color: #a1a1a6; font-size: 14px; line-height: 1.6; border-bottom: 1px solid rgba(255,255,255,0.03);">
            <div style="display: inline-block; vertical-align: middle; width: 18px; height: 18px; border-radius: 50%; background: rgba(59,130,246,0.1); text-align: center; line-height: 18px; margin-right: 12px;">
                <span style="color: ${accentColor}; font-weight: bold; font-size: 10px;">✓</span>
            </div>
            <span style="vertical-align: middle;">${f}</span>
        </td></tr>`)
    .join('');

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: ${fallbackBg}; background-image: ${gradientBg}; border-radius: 24px; border: 1px solid ${borderColor}; border-top: 1px solid ${borderTopColor}; margin-bottom: 24px; overflow: hidden; ${glassShadow}">
        <tr><td style="padding: 40px 32px;">
            ${badgeHtml}
            <p style="margin: 0 0 6px 0; font-size: 11px; color: ${accentColor}; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">Option 0${index}</p>
            <h2 style="margin: 0 0 12px 0; font-size: 26px; color: #f5f5f7; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-weight: 600; letter-spacing: -0.5px;">${pkg.name}</h2>
            <p style="margin: 0 0 24px 0; font-size: 15px; color: #86868b; line-height: 1.6; font-weight: 400;">${pkg.bestFor}</p>

            <div style="background: rgba(0,0,0,0.4); border-radius: 16px; padding: 24px; margin-bottom: 28px; border: 1px solid rgba(255,255,255,0.03); box-shadow: inset 0 2px 10px rgba(0,0,0,0.2);">
                <p style="margin: 0 0 4px 0; font-size: 11px; color: #86868b; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Setup / Build Fee</p>
                <p style="margin: 0; font-size: 36px; font-weight: 700; color: #ffffff; letter-spacing: -1px; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">${pkg.price}</p>
                <p style="margin: 8px 0 0 0; font-size: 12px; color: #86868b; font-weight: 500;">One-time payment</p>
                <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.05);">
                    <p style="margin: 0 0 4px 0; font-size: 11px; color: #86868b; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Monthly System Retainer</p>
                    <p style="margin: 0; font-size: 20px; font-weight: 700; color: ${accentLight}; letter-spacing: -0.5px;">from ${pkg.monthly}</p>
                </div>
            </div>

            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${featuresHtml}
            </table>

            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.05);">
                <p style="margin: 0; font-size: 13px; color: #86868b;">
                    <span style="color: #f5f5f7; font-weight: 600; margin-right: 6px;">Timeline:</span> ${pkg.timeline}
                </p>
            </div>
        </td></tr>
    </table>`;
}

function generateAIProposalEmail(
  name: string,
  company: string,
  selectedPackage: AIPackageKey
): string {
  const year = new Date().getFullYear();
  const isAll = false; // AI proposals always show the selected package (or could be extended)
  const packagesToShow = [selectedPackage];
  const accentColor = '#3B82F6';
  const accentLight = '#60A5FA';

  const packageBlocks = packagesToShow
    .map((key, i) => renderAIPackageBlock(AI_PACKAGES[key], i + 1))
    .join('');

  const selectedPkg = AI_PACKAGES[selectedPackage];
  const subjectLine = `${selectedPkg.name} AI System Proposal`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subjectLine} — ARC AI</title>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
    
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; padding: 40px 10px;">
        <tr><td align="center">
            
            <table role="presentation" width="680" cellpadding="0" cellspacing="0" style="background-color: #0a0a0b; background-image: linear-gradient(180deg, #121214 0%, #050505 100%); border-radius: 32px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06); border-top: 1px solid rgba(255,255,255,0.15); box-shadow: 0 40px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05);">

                <!-- Header -->
                <tr><td style="padding: 50px 48px 40px 48px; position: relative;">
                    <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 300px; height: 100px; background: radial-gradient(ellipse at top, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%); pointer-events: none;"></div>
                    
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="position: relative; z-index: 1;">
                                <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 2px; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                    ARC <span style="background: linear-gradient(135deg, ${accentLight} 0%, ${accentColor} 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: ${accentColor};">AI</span>
                                </h1>
                                <p style="margin: 8px 0 0 0; font-size: 11px; color: #86868b; letter-spacing: 2px; text-transform: uppercase; font-weight: 600;">
                                    AI Systems That Scale Your Business.
                                </p>
                            </td>
                            <td style="text-align: right; vertical-align: top; position: relative; z-index: 1;">
                                <div style="display: inline-block; background: rgba(255,255,255,0.03); padding: 8px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                                    <p style="margin: 0; font-size: 10px; color: #a1a1a6; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;">AI System Proposal</p>
                                    <p style="margin: 2px 0 0 0; font-size: 11px; color: #f5f5f7; font-weight: 500;">${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </td></tr>

                <!-- Soft Divider -->
                <tr><td style="padding: 0 48px;">
                    <div style="height: 1px; background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(59,130,246,0.5) 50%, rgba(255,255,255,0) 100%);"></div>
                </td></tr>

                <!-- Overview Section -->
                <tr><td style="padding: 40px 48px 10px 48px;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; color: ${accentColor}; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">01 — Overview</p>
                    <h2 style="margin: 0 0 16px 0; font-size: 28px; color: #f5f5f7; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; letter-spacing: -0.5px;">
                        AI System Proposal for ${company}
                    </h2>
                    <p style="margin: 0; font-size: 16px; color: #a1a1a6; line-height: 1.8; font-weight: 400;">
                        Hi <strong style="color: #ffffff; font-weight: 600;">${name}</strong>, thank you for considering ARC AI. 
                        This proposal outlines an AI-powered system designed to automate key workflows, capture and qualify leads, 
                        and give <strong style="color: #ffffff; font-weight: 600;">${company}</strong> the tools to scale efficiently without scaling headcount.
                    </p>
                </td></tr>

                <!-- Objectives Section -->
                <tr><td style="padding: 40px 48px 10px 48px;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; color: ${accentColor}; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">02 — Core Objectives</p>
                    
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%); border-radius: 20px; border: 1px solid rgba(255,255,255,0.04); margin-top: 16px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);">
                        <tr><td style="padding: 24px 32px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr><td style="padding: 10px 0; color: #d2d2d7; font-size: 15px;"><span style="color: ${accentLight}; margin-right: 12px; font-weight: bold;">→</span>Automate repetitive tasks and reduce manual admin work</td></tr>
                                <tr><td style="padding: 10px 0; color: #d2d2d7; font-size: 15px;"><span style="color: ${accentLight}; margin-right: 12px; font-weight: bold;">→</span>Respond to leads instantly, 24/7, with AI-powered assistants</td></tr>
                                <tr><td style="padding: 10px 0; color: #d2d2d7; font-size: 15px;"><span style="color: ${accentLight}; margin-right: 12px; font-weight: bold;">→</span>Capture, qualify, and route enquiries without human bottlenecks</td></tr>
                                <tr><td style="padding: 10px 0; color: #d2d2d7; font-size: 15px;"><span style="color: ${accentLight}; margin-right: 12px; font-weight: bold;">→</span>Integrate AI seamlessly into your existing workflows and tools</td></tr>
                                <tr><td style="padding: 10px 0; color: #d2d2d7; font-size: 15px;"><span style="color: ${accentLight}; margin-right: 12px; font-weight: bold;">→</span>Scale operations without proportionally scaling headcount</td></tr>
                            </table>
                        </td></tr>
                    </table>
                </td></tr>

                <!-- Package Section -->
                <tr><td style="padding: 40px 48px 10px 48px;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; color: ${accentColor}; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">03 — Recommended AI System</p>
                    ${packageBlocks}
                </td></tr>

                <!-- Implementation Timeline -->
                <tr><td style="padding: 30px 48px 20px 48px;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; color: ${accentColor}; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">04 — Implementation Process</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top: 16px; background: rgba(0,0,0,0.5); border-radius: 20px; border: 1px solid rgba(255,255,255,0.04); overflow: hidden; box-shadow: inset 0 2px 10px rgba(0,0,0,0.3);">
                        <tr>
                            <td style="width: 25%; padding: 24px 12px; border-right: 1px solid rgba(255,255,255,0.03); text-align: center;">
                                <p style="margin: 0; font-size: 24px; color: #f5f5f7; font-weight: 700;">01</p>
                                <p style="margin: 8px 0 0 0; font-size: 11px; color: #a1a1a6; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Audit & Map</p>
                                <p style="margin: 4px 0 0 0; font-size: 12px; color: ${accentColor}; font-weight: 500;">Week 1</p>
                            </td>
                            <td style="width: 25%; padding: 24px 12px; border-right: 1px solid rgba(255,255,255,0.03); text-align: center;">
                                <p style="margin: 0; font-size: 24px; color: #f5f5f7; font-weight: 700;">02</p>
                                <p style="margin: 8px 0 0 0; font-size: 11px; color: #a1a1a6; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Architect</p>
                                <p style="margin: 4px 0 0 0; font-size: 12px; color: ${accentColor}; font-weight: 500;">Week 1–2</p>
                            </td>
                            <td style="width: 25%; padding: 24px 12px; border-right: 1px solid rgba(255,255,255,0.03); text-align: center;">
                                <p style="margin: 0; font-size: 24px; color: #f5f5f7; font-weight: 700;">03</p>
                                <p style="margin: 8px 0 0 0; font-size: 11px; color: #a1a1a6; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Train & Test</p>
                                <p style="margin: 4px 0 0 0; font-size: 12px; color: ${accentColor}; font-weight: 500;">Week 2–3</p>
                            </td>
                            <td style="width: 25%; padding: 24px 12px; text-align: center;">
                                <p style="margin: 0; font-size: 24px; color: #f5f5f7; font-weight: 700;">04</p>
                                <p style="margin: 8px 0 0 0; font-size: 11px; color: #a1a1a6; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Deploy</p>
                                <p style="margin: 4px 0 0 0; font-size: 12px; color: ${accentColor}; font-weight: 500;">Week 3+</p>
                            </td>
                        </tr>
                    </table>
                </td></tr>

                <!-- Investment Terms -->
                <tr><td style="padding: 30px 48px 10px 48px;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; color: ${accentColor}; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">05 — Terms of Investment</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%); border-radius: 20px; border: 1px solid rgba(255,255,255,0.04); margin-top: 16px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);">
                        <tr><td style="padding: 24px 32px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding: 12px 0; color: #a1a1a6; font-size: 14px; width: 35%; font-weight: 500;">Setup Payment</td>
                                    <td style="padding: 12px 0; color: #f5f5f7; font-size: 14px; font-weight: 600;">70% initiation · 30% upon delivery</td>
                                </tr>
                                <tr><td colspan="2" style="border-bottom: 1px solid rgba(255,255,255,0.03);"></td></tr>
                                <tr>
                                    <td style="padding: 12px 0; color: #a1a1a6; font-size: 14px; font-weight: 500;">Monthly Retainer</td>
                                    <td style="padding: 12px 0; color: #f5f5f7; font-size: 14px; font-weight: 600;">Billed monthly after go-live</td>
                                </tr>
                                <tr><td colspan="2" style="border-bottom: 1px solid rgba(255,255,255,0.03);"></td></tr>
                                <tr>
                                    <td style="padding: 12px 0; color: #a1a1a6; font-size: 14px; font-weight: 500;">AI Usage (API)</td>
                                    <td style="padding: 12px 0; color: #f5f5f7; font-size: 14px; font-weight: 600;">Billed at cost — no markups</td>
                                </tr>
                            </table>
                        </td></tr>
                    </table>
                </td></tr>

                <!-- CTA Section -->
                <tr><td style="padding: 40px 48px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(145deg, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.02) 100%); border-radius: 24px; border: 1px solid rgba(59,130,246,0.2); box-shadow: 0 15px 35px rgba(59,130,246,0.05), inset 0 1px 0 rgba(96,165,250,0.1);">
                        <tr><td style="padding: 40px; text-align: center;">
                            <p style="margin: 0 0 12px 0; font-size: 22px; color: #ffffff; font-weight: 700; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">See It In Action</p>
                            <p style="margin: 0 0 28px 0; font-size: 15px; color: #a1a1a6; line-height: 1.6;">Book a free 30-minute discovery call to see a live demo of what AI can do for your business.</p>
                            
                            <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                                <tr>
                                    <td style="border-radius: 12px; background: linear-gradient(135deg, ${accentLight} 0%, ${accentColor} 100%); box-shadow: 0 8px 24px rgba(59,130,246,0.4), inset 0 1px 0 rgba(255,255,255,0.4);">
                                        <a href="https://calendly.com/arcai-support/30min" style="display: block; padding: 16px 40px; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 15px; letter-spacing: 0.5px; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                            Book Discovery Call &nbsp;→
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td></tr>
                    </table>
                </td></tr>

                <!-- Footer -->
                <tr><td style="padding: 30px 48px 40px 48px; border-top: 1px solid rgba(255,255,255,0.03);">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td>
                                <p style="margin: 0; font-size: 12px; color: #86868b; font-weight: 500;">
                                    © ${year} ARC AI (Pvt) Ltd. All rights reserved.
                                </p>
                                <p style="margin: 6px 0 0 0; font-size: 11px; color: #55555a;">
                                    Colombo 4, Sri Lanka &nbsp;&middot;&nbsp; Birmingham, UK
                                </p>
                            </td>
                            <td style="text-align: right; vertical-align: middle;">
                                <a href="https://www.arcai.agency" style="color: ${accentColor}; font-size: 13px; text-decoration: none; font-weight: 600; padding-bottom: 2px; border-bottom: 1px solid rgba(59,130,246,0.3);">arcai.agency</a>
                            </td>
                        </tr>
                    </table>
                </td></tr>

            </table>
        </td></tr>
    </table>
</body>
</html>`;
}
