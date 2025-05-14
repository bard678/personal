'use client';

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in">
            <h2 className="h2 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Passionate Android developer with a focus on creating exceptional mobile experiences.
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none opacity-0 animate-fade-in">
            <p>
              With over 5 years of experience in Android development, I've had the privilege of working
              on a diverse range of projects that have shaped my expertise in creating robust,
              user-friendly mobile applications.
            </p>

            <p>
              My journey in mobile development began with Java, but I quickly embraced Kotlin and
              modern Android development practices. I'm particularly passionate about clean
              architecture, reactive programming, and creating beautiful user interfaces with
              Jetpack Compose.
            </p>

            <p>
              When I'm not coding, I enjoy contributing to open-source projects, writing technical
              articles, and staying up-to-date with the latest developments in the Android ecosystem.
              I believe in continuous learning and sharing knowledge with the developer community.
            </p>

            <h3>What I Bring to the Table</h3>
            <ul>
              <li>Strong foundation in Android app architecture and best practices</li>
              <li>Experience with modern Android development tools and libraries</li>
              <li>Focus on writing clean, maintainable, and testable code</li>
              <li>Passion for creating intuitive and performant user experiences</li>
              <li>Collaborative approach to problem-solving and team development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 