// bento-pricing.tsx
'use client';
import React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckIcon, SparklesIcon } from 'lucide-react';

type PricingCardProps = {
	titleBadge: string;
	priceLabel: string;
	priceSuffix?: string;
	features: string[];
	cta?: string;
	className?: string;
	variant?: 'default' | 'featured';
	badgeIcon?: React.ReactNode;
	badgeText?: string;
};

function FilledCheck() {
	return (
		<div className="bg-blue-500 text-white rounded-full p-0.5">
			<CheckIcon className="size-3" strokeWidth={3} />
		</div>
	);
}

function PricingCard({
	titleBadge,
	priceLabel,
	priceSuffix = '/month',
	features,
	cta = 'Subscribe',
	className,
	variant = 'default',
	badgeIcon,
	badgeText,
}: PricingCardProps) {
	const isFeatured = variant === 'featured';

	return (
		<div
			className={cn(
				'bg-zinc-900 border-zinc-800 relative overflow-hidden rounded-md border',
				'backdrop-blur',
				className,
			)}
		>
			{isFeatured && (
				<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
					<div className="from-zinc-700/20 to-zinc-800/10 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
						<div
							aria-hidden="true"
							className={cn(
								'absolute inset-0 size-full mix-blend-overlay',
								'bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)]',
								'bg-[size:24px]',
							)}
						/>
					</div>
				</div>
			)}

			<div className="flex items-center gap-3 p-4">
				<Badge variant="secondary" className="bg-zinc-800 text-zinc-300 border-zinc-700">
					{titleBadge}
				</Badge>
				{badgeText && (
					<Badge variant="outline" className="hidden lg:flex border-zinc-700 text-zinc-400">
						{badgeIcon}
						{badgeText}
					</Badge>
				)}
				<div className="ml-auto">
					<Button className={isFeatured ? "bg-blue-600 hover:bg-blue-700" : "bg-zinc-800 hover:bg-zinc-700 border border-zinc-700"}>
						{cta}
					</Button>
				</div>
			</div>

			<div className={cn(
				"p-4",
				isFeatured ? "flex flex-col lg:flex-row" : ""
			)}>
				<div className={cn(
					"flex items-end gap-2",
					isFeatured ? "pb-4 lg:w-[30%]" : "pb-2"
				)}>
					<span className="font-mono text-5xl font-semibold tracking-tight text-white">
						{priceLabel}
					</span>
					{priceLabel.toLowerCase() !== 'free' && priceLabel !== '$0' && (
						<span className="text-zinc-500 text-sm">{priceSuffix}</span>
					)}
				</div>

				<ul className={cn(
					"text-zinc-400 grid gap-4 text-sm",
					isFeatured ? "lg:w-[70%]" : "pt-2"
				)}>
					{features.map((f, i) => (
						<li key={i} className="flex items-center gap-3">
							<FilledCheck />
							<span className="leading-relaxed">{f}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

type BentoPricingProps = {
	plans?: PricingCardProps[];
};

export function BentoPricing({ plans }: BentoPricingProps) {
	// Default plans if none provided
	const defaultPlans: PricingCardProps[] = [
		{
			titleBadge: 'CREATORS SPECIAL',
			priceLabel: '$19',
			features: [
				'Perfect for individual bloggers',
				'freelancers and entrepreneurs',
				'AI-Powered editing tools',
				'Basic Analytics to track content performance',
			],
			variant: 'featured',
			badgeIcon: <SparklesIcon className="me-1 size-3" />,
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
	];

	const pricingPlans = plans || defaultPlans;

	return (
		<div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-8">
			{pricingPlans.map((plan, index) => (
				<PricingCard key={index} {...plan} />
			))}
		</div>
	);
}