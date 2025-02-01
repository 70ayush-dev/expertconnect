import Header from '@/app/(app)/Header'

const Dashboard = () => {
    return (
        <>
            <Header title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6  border-b">
                            You are logged in!
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard