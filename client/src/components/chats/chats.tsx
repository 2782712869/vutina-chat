import { ChatsStyle, SearchStyle, ListStyle } from "./chats-style";
import searchIcon from "@src/assets/imgs/chats/search.png";
import sortIcon from "@src/assets/imgs/chats/sort.png";
import ArchiveBox from "@src/assets/imgs/chats/ArchiveBox.png";
import ChatsItem from "../chats-item/chats-item";

function Search() {
  return (
    <SearchStyle>
      <img className="search" src={searchIcon} alt="search" />
      <input type="text" placeholder="搜索" />
      <img className="sort" src={sortIcon} alt="sort" />
    </SearchStyle>
  );
}

function List() {
  return (
    <ListStyle>
      <div className="title">
        <img src={ArchiveBox} alt="icon" />
        <span className="content">聊天记录</span>
      </div>
      <div className="list">
        <div className="pinned">
          <h6>置顶</h6>
          <ul>
            <div className="empty">暂无置顶聊天</div>
          </ul>
        </div>
        <div className="all">
          <h6>全部</h6>
          <ul>
            {Array.from({ length: 6 })
              .fill(10)
              .map((_, index) => {
                return <ChatsItem key={index} />;
              })}
          </ul>
        </div>
      </div>
    </ListStyle>
  );
}

export default function Chats() {
  return (
    <ChatsStyle>
      <div className="title">
        <h1>Chats</h1>
        <div className="logo"></div>
      </div>
      <Search />
      <List />
    </ChatsStyle>
  );
}
