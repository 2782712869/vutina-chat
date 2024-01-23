import { SideBarStyle, BarsStyle, SettingStyle } from "./side-bar-style";
import budgie from "@src/assets/imgs/sidebar/Budgie.png";
import avatar from "@src/assets/imgs/sidebar/Ellipse.png";
import { Switch } from "@mui/material";
import "@src/assets/fonts/iconfont.css";
import { useImmer } from "use-immer";

const icons = {
  message: "icon-xiaoxi",
  group: "icon--qunliao",
  phone: "icon-dianhua",
};

function Switche() {
  const label = { inputProps: { "aria-label": "Switch" } };
  return <Switch {...label} defaultChecked />;
}

export default function SideBar() {
  const [active, setActive] = useImmer<Record<keyof typeof icons, boolean>>({
    message: true,
    group: false,
    phone: false,
  });

  type ActiveItem = keyof typeof active;

  const handleItemClick = (item: ActiveItem) => {
    setActive((draft) => {
      Object.keys(draft).forEach(
        (key) => (draft[key as ActiveItem] = key === item)
      );
    });
  };

  return (
    <SideBarStyle>
      <div className="top">
        <div className="logo">
          <img src={budgie} alt="logo" />
        </div>
        <BarsStyle>
          {Object.keys(active).map((item) => (
            <li
              key={item}
              className={active[item as ActiveItem] ? "active" : ""}
              onClick={() => handleItemClick(item as ActiveItem)}
            >
              <span className={`iconfont ${icons[item as ActiveItem]}`}></span>
            </li>
          ))}
        </BarsStyle>
        <SettingStyle>
          <span className="iconfont icon-shezhi"></span>
        </SettingStyle>
      </div>
      <div className="bottom">
        <Switche />
        <img src={avatar} alt="avatar" />
      </div>
    </SideBarStyle>
  );
}
