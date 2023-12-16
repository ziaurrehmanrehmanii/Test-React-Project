import Header from '../component/Headre/Header'
import Foter from '../component/fotter/Foter'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Foter />
        </>
    )
}
