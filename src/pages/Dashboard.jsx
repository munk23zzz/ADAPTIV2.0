import React from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '../layouts/DashboardLayout';
import ProfileCard from '../components/dashboard/ProfileCard';
import QuickStats from '../components/dashboard/QuickStats';
import SubjectProgress from '../components/dashboard/SubjectProgress';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import BadgesCard from '../components/dashboard/BadgesCard';
import StreakCard from '../components/dashboard/StreakCard';
import UploadActionCard from '../components/dashboard/UploadActionCard';
import LeaderboardCard from '../components/dashboard/LeaderboardCard';

const Dashboard = ({ isDark, toggleTheme }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <DashboardLayout isDark={isDark} toggleTheme={toggleTheme}>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8 pb-12"
      >
        
        {/* Left Column: Profile & Stats */}
        <motion.div variants={item} className="xl:col-span-3 space-y-6">
          <ProfileCard />
          <QuickStats />
          <SubjectProgress />
        </motion.div>

        {/* Center Column: Performance & Actions */}
        <motion.div variants={item} className="xl:col-span-6 space-y-6">
          <PerformanceChart />
          <BadgesCard />
          <StreakCard />
          
          <div className="flex flex-col gap-6">
            <UploadActionCard />
          </div>
        </motion.div>

        {/* Right Column: Leaderboard */}
        <motion.div variants={item} className="xl:col-span-3">
          <LeaderboardCard />
        </motion.div>
        
      </motion.div>
    </DashboardLayout>
  );
};

export default Dashboard;
