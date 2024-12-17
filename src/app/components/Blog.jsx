import Link from 'next/link'

const featuredPosts = [
  { id: 1, title: 'The Future of Web Development', excerpt: 'Exploring upcoming trends and technologies in web development.', date: '2023-06-01' },
  { id: 2, title: 'Mastering React Hooks', excerpt: 'A deep dive into React Hooks and how to use them effectively.', date: '2023-05-15' },
  { id: 3, title: 'Building Scalable APIs with GraphQL', excerpt: 'Learn how to create efficient and flexible APIs using GraphQL.', date: '2023-04-30' },
]

export default function Blog() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map(post => (
            <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

