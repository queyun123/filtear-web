import React from 'react';
import { Tabs } from '@chakra-ui/react';
import { TabContext, TabList } from '@mui/lab';
import { Tab } from '@mui/material';
import { useHomePostListStore } from './Home.store.ts';
import { HOME_TABS, type HomeTabs } from './type.ts';
import VirtualPostList from './VirtualPostList';

export default function Home() {
  const tabs = [
    {
      key: HOME_TABS.Recommended,
      name: '为你推荐',
      current: true,
    },
    {
      key: HOME_TABS.Subscriptions,
      name: '我的订阅',
      current: false,
    },
    {
      key: HOME_TABS.Following,
      name: '我的关注',
      current: false,
    },
  ];
  // 从store获取活跃tab，保持状态一致性
  const { currentTab, setCurrentTab } = useHomePostListStore();

  return (
    <div className="w-full relative">
      <Tabs.Root
        defaultValue={currentTab}
        onValueChange={(details) => {
          setCurrentTab(details.value as HomeTabs);
        }}
        className="sticky! top-0 bg-white/75 z-50 backdrop-blur-sm"
        size="lg"
      >
        <Tabs.List className="flex justify-center items-center gap-4">
          {tabs.map((tab) => (
            <Tabs.Trigger key={tab.key} value={tab.key}>
              {tab.name}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>

      <VirtualPostList />
    </div>
  );
}
