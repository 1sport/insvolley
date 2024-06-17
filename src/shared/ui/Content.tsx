"use client"

import {BlocksRenderer} from '@strapi/blocks-react-renderer';


type Props = {
  content: any[]
}

export const Content = ({ content }: Props) => {
  return <div className="blocks-content"><BlocksRenderer content={content || []} /></div>
}
