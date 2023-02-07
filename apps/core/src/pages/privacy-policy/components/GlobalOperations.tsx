import { Title, Text, List, createStyles } from "@mantine/core";
import React from "react";

const useStyles = createStyles(theme => (
  {
  pageTitle: {
    fontSize: "24px",
    marginBottom: "12px"
  },
  pageSection: {
    marginBottom: "34px"
  },
  subHeading: {
    marginBottom: "12px",
    lineHeight: "20px"
  },
  paragraph: {
    marginBottom: "20px"
  },
  list: {
    marginBottom: "16px"
  }
}
));
const GlobalOperations = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.pageSection} id="global-ops">
      <Title className={classes.pageTitle}>Our global operations</Title>
      <Text className={classes.paragraph}>
        Globally, we share the data we acquire with our partners, service
        providers, and other third parties as well as internally among our
        locations and data centers. Transfers are required since Meta is a
        global company with clients and workers all over the world for a number
        of reasons, including:
      </Text>
      <List>
        <List.Item className={classes.list}>
          So that we may operate and offer the services described in this
          Privacy Policy.
        </List.Item>
        <List.Item className={classes.list}>
          So that in compliance with this Privacy Policy, we can fix, evaluate,
          and improve our products.
        </List.Item>
      </List>
      <Text className={classes.list}>
        We offer the following protections in particular if Zuri Chat transfers
        Personal Data from regions with various data protection laws:
      </Text>
      <List>
        <List.Item className={classes.list}>
          Standard Contractual Clauses of the European Commission. For transfers
          to, among other countries, Australia, Canada, India, Japan, South
          Korea, and the United States, Zuri Chat uses Standard Contractual
          Clauses certified by the European Commission (and, when appropriate,
          the equivalent Standard Contractual Clauses for the UK). Your Personal
          Data will be transferred by Zuri Chat to make the Services more
          accessible. You can get a copy of our standard data processing
          addendum, which incorporates the Standard Contractual Clauses, here,
          and you can get a copy of the Standard Contractual Clauses in their
          executed form by getting in touch with us as instructed in the
          "Contacting Zuri Chat" section below.
        </List.Item>
        <List.Item className={classes.list}>
          Cross-Border Privacy Rules System and Privacy Recognition for
          Processors under the Asia-Pacific Economic Cooperation. Zuri Chat
          complies with the Privacy Recognition for Processors ("PRP") standard
          and the Cross Border Privacy Rules ("CBPR") framework of the
          Asia-Pacific Economic Cooperation ("APEC"). The PRP demonstrates an
          organization's capability to provide effective implementation of a
          personal data controller's privacy obligations related to the
          processing of personal information. The APEC CBPR system offers
          organizations a framework to ensure protection of personal data
          transferred among participating APEC economies. Here is where you may
          learn more details about the APEC framework. You can get in touch with
          our third-party dispute resolution service if you have an unresolved
          privacy or data use concern with our APEC CBPR or PRP certifications
          that we haven't addressed satisfactorily.
        </List.Item>
      </List>
    </div>
  );
};

export default GlobalOperations;
