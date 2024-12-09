import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Ocean connecting - Online Courses & Education "}
                </title>
            </Head>
        </>
    )
}

export default PageHead