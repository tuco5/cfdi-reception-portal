import {inter} from '@/styles/fonts';
import {twMerge} from 'tailwind-merge';

export default function DashboardPage() {
  return (
    <main className={twMerge(inter.className, 'flex min-h-screen flex-col items-center')}>
      Dashboard
    </main>
  );
}
