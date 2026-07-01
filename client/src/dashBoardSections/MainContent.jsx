import React, { useState } from 'react';
import LessonCard from './LessonCard';
import CourseCard from './CourseCard';
import { chapters, chapterOptions } from '../lecturePageSections/ChapterSelector';
import { chapterOrder } from '../lecturePageSections/lecture-order';

function MainContent() {
  const lessons = [
    { category: 'FROM PYTHON', title: 'FOR LOOP', expectedTime: 'insert minutes here' },
    { category: 'FROM PYTHON', title: 'WHILE LOOP', expectedTime: 'insert minutes here' },
    { category: 'FROM PYTHON', title: 'LIST', expectedTime: 'insert minutes here' }
  ];

  const courses = [
    {
      name: 'PYTHON',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      bgColor: 'bg-white',
      lessonsCompleted: 'lessons completed',
      toc: chapters,
      chapterLabels: chapterOptions,
      chapterOrder
    },
    {
      name: 'JAVASCRIPT',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      bgColor: 'bg-yellow-300',
      lessonsCompleted: '1 / 15 lessons completed'
    },
    {
      name: 'HTML/CSS FOUNDATION',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg',
      bgColor: 'bg-white',
      lessonsCompleted: '1 / 15 lessons completed'
    },
    {
      name: 'TAILWIND CSS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      bgColor: 'bg-white',
      lessonsCompleted: '1 / 15 lessons completed'
    }
  ];

  return (
    <div className="p-4 md:p-8">
      {/* Next Lesson Section */}
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl mb-5 text-gray-800">Next lesson</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <LessonCard 
              key={index}
              category={lesson.category}
              title={lesson.title}
              expectedTime={lesson.expectedTime}
            />
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <div className="mt-10">
        <h2 className="text-4xl md:text-5xl mb-5 text-gray-800">Courses Available</h2>
        <div>
          {courses.map((course, index) => (
            <CourseCard 
              key={index}
              name={course.name}
              logo={course.logo}
              bgColor={course.bgColor}
              lessonsCompleted={course.lessonsCompleted}
              toc={course.toc}
              chapterLabels={course.chapterLabels}
              chapterOrder={course.chapterOrder}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
