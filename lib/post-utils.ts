export type Post = {
  name: string;
  title: string;
  image: string;
  avatar: string;
  text: string;
  date: string;
};

type RootData = {
  [key: string]: Post;
};

const convertDataToArr = (rootData: RootData): Post[] => {
  return Object.values(rootData).map((item) => item);
};

export const getAllPosts = async () => {
  const repsonse = await fetch(process.env.FIREBASE_BD_POSTS!);
  const rootData: RootData = await repsonse.json();
  return convertDataToArr(rootData);
};

export const getFeturedPosts = async () => {
  const convertedDate = (date: string): number => {
    const newDate = new Date(Date.parse(date)).getDate();
    return newDate;
  };
  const data = await getAllPosts();
  return data.filter((post) => convertedDate(post.date) > 27);
};

export const sendPost = async (post: Post) => {
  const response = await fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
};
