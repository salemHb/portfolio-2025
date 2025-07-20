"use client";

import { motion } from "framer-motion";

const achievements = [
	{
		icon: "🚧",
		value: "10+",
		label: "Real world projects",
		bgColor: "bg-purple-900/90",
		borderColor: "border-purple-500",
		iconBg: "bg-purple-700",
		delay: 0.6,
	},
];

export default function AchievementsSection() {
	const achievement = achievements[0];

	return (
		<section className="block md:hidden w-full px-4 pt-20 pb-0">
			<div className="flex flex-col items-center gap-y-4 gap-x-3">
				{/* Single achievement card */}
				<motion.div
					key="mobile-achievement"
					className="flex-shrink-0"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: achievement.delay }}
				>
					<motion.div
						className={`${achievement.bgColor} backdrop-blur-md border-2 ${achievement.borderColor} rounded-xl shadow-lg shadow-black/30 w-[220px] p-3 [&_*]:!text-white [&_div.text-sm]:!text-white/90`}
						whileHover={{ scale: 1.05, opacity: 1 }}
						animate={{
							boxShadow: [
								"0 10px 25px rgba(0,0,0,0.3)",
								"0 15px 30px rgba(0,0,0,0.4)",
								"0 10px 25px rgba(0,0,0,0.3)",
							],
						}}
						transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
					>
						<div className="flex items-center space-x-3">
							<div
								className={`flex items-center justify-center w-9 h-9 rounded-full ${achievement.iconBg} text-white text-lg flex-shrink-0`}
							>
								{achievement.icon}
							</div>
							<div className="min-w-0">
								<div className="font-bold text-white text-base">
									{achievement.value}
								</div>
								<div className="text-sm font-medium">{achievement.label}</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
