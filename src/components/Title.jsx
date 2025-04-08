function Title({ children }) {
    return (
        <div className='raw sm-col-12 md-col-6 lg-col-4 d-flex justify-content-center'>
            <h1 style={{ color: 'red', padding: 20, marginTop: 30 }}
                className='text-center border border-danger lg-col-4 md-col-8 sm-col-12'>{children}</h1>
        </div>
    )
}

export default Title