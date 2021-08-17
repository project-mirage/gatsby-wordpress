import { graphql, useStaticQuery } from "gatsby";

export const useCourseQuery = () => {
    const { allF2021Csv } = useStaticQuery(
        graphql`
            query MyQuery {
                allWpPost {
                    nodes {
                        link
                        title
                        content
                        author {
                            node {
                                name
                                nickname
                                url
                                username
                            }
                        }
                    }
                }
            }
        `
    );
    return allF2021Csv;
};
