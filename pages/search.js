import Head from 'next/head'
import Header from './../components/Header';

function Search() {
    return (
        <div>
            <Head>
                <title> search result </title>
            </Head>

            {/* Header */}
            <Header />
            {/* search results */}
        </div>
    )
}

export default Search;
