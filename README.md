Next.js blog.
=======================================

Next.js with Typescript, Firebase database and Next auth.

Main goal -> build fullstack app.

Features -> 

1. Auth/login.
2. Send message without login.
3. Create a post with login.


* * *
### [Demo](https://nextjs-blog-cold-world.vercel.app/)

![Alt Text](https://i.ibb.co/dGqwF1C/Screenshot-2023-04-04-191357.jpg)
![Alt Text](https://i.ibb.co/fx96Pvs/Screenshot-2023-04-04-191419.jpg)
![Alt Text](https://i.ibb.co/fY0s1Yn/Screenshot-2023-04-04-191536.jpg)

* * *



### A piece of code

```
import { hash, compare } from 'bcryptjs';
import { User } from '../pages/api/auth/signup';

export const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const signUpHelper = async (user: User) => {
  await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};

export const verifyPassword = async (password: string, hashedPassword: string) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};
```

### Download & Installation

```shell 
git clone https://github.com/cold-world/nextjs-blog.git
cd <project-dir>
npm install
npm run dev
```
