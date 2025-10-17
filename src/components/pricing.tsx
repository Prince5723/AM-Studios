// demo.tsx
import { BentoPricing } from "@/components/ui/bento-pricing";
import { cn } from '@/lib/utils';

export default function Pricing() {
	// Example: Add more pricing plans
	const customPlans = [
		{
			titleBadge: 'CREATORS SPECIAL',
			priceLabel: '$19',
			features: [
				'Perfect for individual bloggers',
				'freelancers and entrepreneurs',
				'AI-Powered editing tools',
				'Basic Analytics to track content performance',
			],
			variant: 'featured' as const,
			badgeText: 'Most Recommended',
			className: 'lg:col-span-5',
		},
		{
			titleBadge: 'STARTERS',
			priceLabel: '$0',
			features: [
				'Perfect for beginners',
				'Unlimited Content Generation',
				'AI-Powered editing tools',
			],
			className: 'lg:col-span-3',
		},
		{
			titleBadge: 'TEAMS',
			priceLabel: '$49',
			features: [
				'Ideal for small teams and agencies',
				'Collaborative features like shared projects',
				'Advanced Analytics to optimize content strategy',
			],
			className: 'lg:col-span-4',
		},
		{
			titleBadge: 'ENTERPRISE',
			priceLabel: '$99',
			features: [
				'Designed for large companies',
				'high-volume content creators',
				'dedicated account management',
			],
			className: 'lg:col-span-4',
		},
		// Add more plans as needed:
		// {
		// 	titleBadge: 'PREMIUM',
		// 	priceLabel: '$199',
		// 	features: [
		// 		'White-label solutions',
		// 		'Custom integrations',
		// 		'Priority support',
		// 	],
		// 	className: 'lg:col-span-4',
		// },
	];

	return (
		<div id="pricing" className="bg-zinc-950 relative flex size-full min-h-screen items-center justify-center">
			{/* Radial gradient at top */}
			<div className="absolute inset-0 bg-[radial-gradient(35%_80%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
			
			{/* Dots pattern */}
			<div
				aria-hidden="true"
				className={cn(
					'absolute inset-0 -z-10 size-full',
					'bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)]',
					'bg-[size:12px_12px]',
				)}
			/>

			{/* Gradient orbs */}
			<div
				aria-hidden
				className="absolute inset-0 isolate -z-10 opacity-80 contain-strict"
			>
				<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(255,255,255,.04)_0,rgba(255,255,255,.01)_50%,rgba(255,255,255,.005)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
				<div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,.03)_0,rgba(255,255,255,.008)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
				<div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,.03)_0,rgba(255,255,255,.008)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
			</div>

			<section className="mx-auto w-full max-w-5xl p-4">
				{/* Heading */}
				<div className="mx-auto mb-10 max-w-2xl text-center">
					<h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
					Transparent, Fair Pricing.
					</h1>
					<p className="text-zinc-400 mt-4 text-sm md:text-base">
					Every tier is designed to deliver exceptional value. Compare features and find the best way to supercharge your efforts.
					</p>
				</div>
				
				{/* Use with custom plans or without (will use defaults) */}
				<BentoPricing plans={customPlans} />
				{/* Or simply: <BentoPricing /> */}
			</section>
		</div>
	);
}