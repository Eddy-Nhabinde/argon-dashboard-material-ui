import Spin from 'antd/es/spin';

export default function Spiner({ height }) {

    return (
        <div style={{
            marginTop: '10px',
            width: '100%',
            height: height || '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }} >
            <Spin size="large" />
        </div>
    )
}