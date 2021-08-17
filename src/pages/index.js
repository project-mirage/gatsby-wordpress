import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

// styles
const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query LayoutQuery {
            wp {
                generalSettings {
                    title
                    description
                }
            }
            allWpPost {
                nodes {
                    author {
                        node {
                            name
                        }
                    }
                    content
                    date
                    title
                    uri
                }
            }
        }
    `);

    console.log(data);
    return (
        <main>
            <title>Home Page</title>
            <h1>Hello</h1>
            <div>
                <div>
                    {data.allWpPost.nodes.map((post) => {
                        return (
                            <div>
                                <h3>{post.author.node.name}</h3>
								{`${post.content}`}
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default IndexPage;
