"use client";
import { useState, useEffect } from "react";
import styles from "@/app/(frontend)/assets/style/blog/blog.module.css";
import Image from "next/image";
import { getPaginatedBlogsByCategory } from "@/app/admin/dashboard/blog/actions";
import bannerbg from "@/app/(frontend)/assets/images/blog-bg.webp";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 12;

    useEffect(() => {
        async function fetchBlogs() {
            try {
                setLoading(true);
                const categoriesWithBlogs = await getPaginatedBlogsByCategory(currentPage, blogsPerPage);

                const allBlogs = categoriesWithBlogs.flatMap((cat) =>
                    cat.blogs.map((blog) => ({
                        ...blog,
                        categoryName: cat.name,
                        categoryTotal: cat.total,
                    }))
                );

                setBlogs(allBlogs);
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchBlogs();
    }, [currentPage]);

    const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.categoryName)))];

    const filteredPosts = blogs.filter(
        (post) =>
            (category === "All" || post.categoryName === category) &&
            (post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.slug.toLowerCase().includes(search.toLowerCase()))
    );

    const bgurl = typeof bannerbg === "string" ? bannerbg : bannerbg?.src;

    const navigate = useRouter();
    const handleNavigation = (slug) => {
        navigate.push(`/blog/${slug}`); // navigate to blog page
    };

    const totalPages = blogs[0] ? Math.ceil(blogs[0].categoryTotal / blogsPerPage) : 1;

    if (loading) return <p className={styles.loading}>Loading blogs...</p>;

    return (
        <>
            {/* BANNER */}
            <div className={styles.banner} style={{ "--bg": `url(${bgurl}) no-repeat center center / cover` }}>
                <h1 className={styles.heading}>Our Blog</h1>
                <p>Insights, trends, and tips from the WD Agency team.</p>
            </div>

            <section className="frame-1200 py-100 sm-pt-0 sm-pb-50 sm-px-20 sm-pt-0">
                {/* FILTER & SEARCH BAR */}
                <div className={styles.filterBar}>
                    <div className={styles.filterGroup}>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className={styles.selectBox}
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.searchGroup}>
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>
                </div>

                {/* BLOG GRID */}
                <div className={styles.blogGrid}>
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <div key={post.id} className={styles.blogCard} onClick={() => handleNavigation(post.slug)}>
                                <div className={styles.imageWrapper}  >
                                    <Image
                                        src={post.image || "/images/default-blog.jpg"}
                                        alt={post.title}
                                        width={400}
                                        height={250}
                                        className={styles.blogImage}
                                    />
                                </div>
                                <div className={styles.blogContent}>
                                    <span className={styles.categoryTag}>{post.categoryName}</span>
                                    <h3>{post.title}</h3>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: (() => {
                                                const match = post.content.match(/<p>(.*?)<\/p>/i);
                                                return match ? match[0] : post.content.substring(0, 80) + "...";
                                            })(),
                                        }}
                                    ></p>

                                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className={styles.noResults}>No blogs found matching your search.</p>
                    )}
                </div>

                {/* PAGINATION */}
                {filteredPosts.length > 0 && totalPages > 1 && (
                    <div className={styles.pagination}>
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            &lt;
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                            <button
                                key={pageNum}
                                onClick={() => setCurrentPage(pageNum)}
                                className={pageNum === currentPage ? styles.activePage : ""}
                            >
                                {pageNum}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            &gt;
                        </button>
                        <span className={styles.endPage}>End of Page</span>
                    </div>
                )}
            </section>
        </>
    );
}
