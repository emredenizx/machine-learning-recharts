import {
  Select,
  Plotter,
  BarChart,
} from "components/Series";
import SeriesChart from "components/Series/Chart";
import Customizer from "components/Customizer";
import {
  DashboardContainer,
  Column,
  Row,
} from "./Dashboard.styles";
import Section from "./Section";
import useSeries from "./useSeries";

function Dashboard(): JSX.Element {
  const {
    series,
    targetSeries,
    targetSeriesData,
    selectTargetSeries } = useSeries();

  return (
    <DashboardContainer direction="column">
      <Row>
        <Column>
          <Section name="Series">
            <Select
              series={series}
              targetSeries={targetSeries}
              selectTargetSeries={selectTargetSeries}
            />
          </Section>
        </Column>
      </Row>
      <Row>
        <Column width="70%">
          <Section name="Actual vs Prediction">
            <SeriesChart targetSeries={targetSeries}>
              <Plotter targetSeriesData={targetSeriesData} />
            </SeriesChart>
          </Section>
        </Column>
        <Column width="30%">
          <Section
            name="Feature Importances"
            style={{ minHeight: 400, maxHeight: "50vh" }}
          >
            <SeriesChart targetSeries={targetSeries}>
              <BarChart targetSeriesData={targetSeriesData} />
            </SeriesChart>
          </Section>
        </Column>
      </Row>
      {targetSeries && (
        <Row style={{ marginTop: "auto" }}>
          <Column>
            <Section
              name="Customize"
              style={{ backgroundColor: "#e9e9e9" }}
            >
              <Customizer />
            </Section>
          </Column>
        </Row>
      )}
    </DashboardContainer>
  );
}

export default Dashboard;
