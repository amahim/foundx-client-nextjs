import React from 'react'

export default function layout({children,recentPost}: {children: React.ReactNode;
    recentPost: React.ReactNode;
}) {
  return (
    <div>
        {children}
        {recentPost}
    </div>
  )
}
