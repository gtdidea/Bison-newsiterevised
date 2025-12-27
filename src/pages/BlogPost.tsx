import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { supabase, BlogPost } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;

      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .eq('is_published', true)
          .maybeSingle();

        if (error) throw error;

        if (!data) {
          setError('Blog post not found');
        } else {
          setPost(data);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError('Error loading blog post');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-slate-600">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-slate-600 mb-4">{error || 'Post not found'}</p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <article className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>

              <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  {post.volume && (
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Volume {post.volume}
                    </span>
                  )}
                  <span className="text-sm text-slate-500">
                    {formatDate(post.published_date)}
                  </span>
                </div>

                <h1 className="text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  {post.title}
                </h1>

                <p className="text-lg text-slate-600">
                  By {post.author}
                </p>
              </header>

              <div className="prose prose-lg max-w-none prose-slate">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <footer className="mt-16 pt-8 border-t border-slate-200">
                <div className="bg-slate-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Learn More</h3>
                  <p className="text-slate-600 mb-4">
                    To learn more, send the team an email at{' '}
                    <a
                      href="mailto:support@thebisongroup.io"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      support@thebisongroup.io
                    </a>
                  </p>
                  <p className="text-slate-600">
                    Visit{' '}
                    <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
                      www.thebisongroup.io
                    </Link>{' '}
                    to learn more about our services and products.
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
