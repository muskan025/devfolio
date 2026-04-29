import { useState } from 'react';
import Layout from './components/layout';
import Navbar from './components/navbar';

export enum TabKey {
  About = "About",
  Projects = "Growth",
  Blog = "Knowledge logs",
  Contact = "Socialize",
}

function App() {
  const [tab, setTab] = useState<TabKey>(TabKey.About);

  const tabOffsets: { [key in TabKey]: number } = {
    "About": 0,
    "Growth": 1,
    "Knowledge logs": 2,
    "Socialize": 3,
  };

  const baseX = 520;
  const baseW = 221.5;

  const x = baseX + tabOffsets[tab];
  const w = baseW;

  return (
    <main className="relative">
      <Navbar tab={tab} setTab={setTab} left={x} sliderWidth={w} />
      <Layout tab={tab} setTab={setTab} left={x} sliderWidth={w} />
    </main>
  );
}

export default App;
