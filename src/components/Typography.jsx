import './Typography.css'

function Typography({ children, title, paragraph }) {
    if (title) {
        return (
            <div className='raw sm-col-12 md-col-6 lg-col-4 d-flex justify-content-center'>
                <h1 className='text-center border border-danger lg-col-4 md-col-8 sm-col-12'>{children}</h1>
            </div>
        )
    } else if (paragraph) {
        <div className='raw sm-col-12 md-col-6 lg-col-4 d-flex justify-content-center'>
            <p>{children}</p>
        </div>
    }
}

export default Typography