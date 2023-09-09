import appointmentFields from 'utils/variables/appointmentFields.json'
import styles from './index.module.css'
import Layout from "components/layout/mainLayout";
import FormGen from "components/form/formGenerator";
import FormButtons from 'components/formButtons/formButtons';

export default function NovaConsulta() {

    return (
        <Layout>
            <div className={styles.formTitle}>
                <h1>Nova Consulta</h1>
            </div>
            <FormGen fields={appointmentFields} />
            <FormButtons />
        </Layout>
    )
}