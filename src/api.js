const API_SPACES = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
const API_ROOMS = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";

export const fetchSpaces = async () =>{
    const responde = await fetch(API_SPACES);
    return responde.json();
}

export const fetchRooms = async () =>{
  const responde = await fetch(API_ROOMS);
  return responde.json();
}