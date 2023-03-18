import React from "react";
import { Tabs, Title } from "@mantine/core";
import TrackCard from "../../components/trackCard/TrackCard";
import { useSelector } from "react-redux";
import { trackTypes } from "../../redux/trackList.slice";

function Home() {
  const list: trackTypes[] = useSelector((state: any) => state.trackList.value);

  return (
    <div className="w-full h-full px-10 py-12 bg-blue-900 overflow-y-scroll">
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
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
            {list.map((data, i) => (
              <TrackCard data={data as trackTypes} key={i}></TrackCard>
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
