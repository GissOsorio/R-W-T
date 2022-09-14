import React, { createContext, useContext, useState } from 'react';

export interface PostsContextData {
    posts: string;
  }
   
  export const postsContextDefaultValue: PostsContextData = {
    posts: 'beijin'
  }
   
  export const PostsContext = createContext<PostsContextData>(postsContextDefaultValue);