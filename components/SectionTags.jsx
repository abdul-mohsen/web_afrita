import React from 'react'

const SectionTags = ({ tags, minW }) => {
    const tagsArray = Array.isArray(tags) ? tags : [];
  return (
    <ul className={`grid grid-cols-[50px_repeat(auto-fit,_minmax(120px,_1fr))] text-app-gray mr-4  ml-[50px] grid-rows-1 min-w-[${minW}px]`}>
      {tagsArray.map((tag) => (
        <li key={tag} className="">
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default SectionTags