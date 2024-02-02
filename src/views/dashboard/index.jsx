import Grid from "@components/Elements/Grid";
import Stats from "./elements/stats";

export default function DashboardView() {
    return (
        <div>
            <Grid col={5} gap={1}>
                <Stats title={'Usuarios'} description={'Cantidad de usuarios registrados'} counter={'3000'}/>
                <Stats title={'Usuarios'} description={'Cantidad de usuarios registrados'} counter={'3000'}/>
                <Stats title={'Usuarios'} description={'Cantidad de usuarios registrados'} counter={'3000'}/>
                <Stats title={'Usuarios'} description={'Cantidad de usuarios registrados'} counter={'3000'}/>
                <Stats title={'Usuarios'} description={'Cantidad de usuarios registrados'} counter={'3000'}/>
            </Grid>
        </div>
    )
}