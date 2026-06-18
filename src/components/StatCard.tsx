'use client';

import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { BLUR, DURATION } from '@/lib/motion';

type StatCardProps = {
  value?: number;
  label?: string;
  desc: string;
  delay?: number;
  prefix?: string;
  suffix?: string;
};

export default function StatCard({
  value,
  label,
  desc,
  delay = 0,
  prefix = '',
  suffix = '',
}: StatCardProps) {
  const { count, ref } = useCountUp(value ?? 0, 800);

  return (
    <motion.div
      ref={ref}
      className="stat"
      initial={{ opacity: 0, y: 12, filter: BLUR.subtle }}
      whileInView={{ opacity: 1, y: 0, filter: BLUR.out }}
      viewport={{ once: true }}
      transition={{ duration: DURATION.item, delay }}
    >
      <strong>{label ?? `${prefix}${value !== undefined ? count : ''}${suffix}`}</strong>
      <span>{desc}</span>
    </motion.div>
  );
}
