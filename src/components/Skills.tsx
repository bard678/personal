'use client';

const skills = [
  { category: 'Android Development', items: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'Material Design'] },
  { category: 'Architecture', items: ['MVVM', 'Clean Architecture', 'Repository Pattern', 'Dependency Injection'] },
  { category: 'Libraries', items: ['Retrofit', 'Room', 'Dagger/Hilt', 'Coroutines', 'Flow'] },
  { category: 'Tools', items: ['Android Studio', 'Git', 'Firebase', 'Play Console', 'CI/CD'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="h2 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise in Android development
            and related technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 