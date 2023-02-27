import React from "react";
import { Button, Tabs, Title } from "@mantine/core";
import TrackCard from "../../components/trackCard/TrackCard";

function Home() {
  return (
    <div className="w-full h-full px-10 py-12 bg-blue-900 overflow-y-auto">
      <Title order={1} className="text-neutral-50 mb-4">
        Home
      </Title>
      <Tabs
        variant="default"
        defaultValue="all"
        color="purple"
        className="text-white"
      >
        <Tabs.List className="mb-4">
          <Tabs.Tab value="all">All</Tabs.Tab>
          <Tabs.Tab value="favorite">Favorite</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="all">
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
            {Array.from({ length: 10 }).map((_, i) => (
              <TrackCard key={i}></TrackCard>
            ))}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="favorite">
          <h2>Favorite Panel</h2>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default Home;
