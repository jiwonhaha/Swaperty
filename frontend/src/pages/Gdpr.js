import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

import classes from "./pagesCss/Gdpr.module.css";
import AuthContext from "../Auth/authentication/AuthContext";

function GdprPage() {
  let {user} = useContext(AuthContext)
  const [isChecked, setIsChecked] = useState(false);
  const checkedHandler = (e) => {
    setIsChecked((isChecked) => !isChecked);
    console.log(isChecked);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      //   textAlign: "center",
    },
    scrollView: {
      backgroundColor: "white",
      marginHorizontal: 20,
    },
    text: {
      fontSize: 16,
    },
  });

  return (
    <div className={classes.card}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            <span className={classes.title}>Privacy Policy</span>
            <br />
            <br /> When you use Swaperty's services, you trust us to securely
            handle and store your information. We understand this as a major
            responsibility and strive to protect your information and put you in
            control.
            <br /> This Privacy Policy below explains how our organisation uses
            the personal data we collect from you (the user) when you use our
            web app. <br />
            <br />
            <span className={classes.subtitle}> What data do we collect?</span>
            <br />
            <br />
            1. The user’s Personal Information (Name, Phone number, Mailing
            address, Email address, Username, Password) <br />
            2. Information to verify the user (Bank statement, Utility bill){" "}
            <br />
            3. User feedback (satisfaction, ratings, opinions) <br />
            4. Information about the property the user is listing (Location,
            photos, available dates, amenities, description, preferred visitor
            type (e.g student, worker etc))
            <br />
            5. A user’s currently active and previous swaps.
            <br />
            6. User location information <br />
            7. Marketing Preferences <br />
            <br />
            <span className={classes.subtitle}>
              How do we collect your data?{" "}
            </span>
            <br />
            <br />
            1. Personal information, user verification documents and marketing
            preferences are collected when a user creates an account.
            <br />
            2. Feedback via a voluntary customer survey or arising from queries
            submitted via the ‘Contact Us’ page forum.
            <br />
            3. Property information will be submitted by the user after account
            creation.
            <br />
            4. Location of users by GPS (Approximate Country, County, Postcode).
            <br />
            5. A user’s active and previous swaps will be obtained via their
            approval of a swap.
            <br />
            <br />
            <span className={classes.subtitle}>How will we use your data?</span>
            <br />
            <br />
            1. Personal information to deliver our services (e.g account
            management) /communications (including marketing with the relevant
            permissions) to the user, provide all swappers with basic details
            such as the user’s name, visitor type and provide confirmed swappers
            with further details such as their contact details enabling them
            both to communicate.
            <br />
            2. Verification documents will enable us to certify the user's
            personal information before allowing them to send/receive swap
            requests for the safety of all users as well as: fraud prevention
            and customer service security.
            <br />
            3. Any illegal activities that arise from a user’s use of Swaperty’s
            services may require us to share information with the relevant
            authorities.
            <br />
            4. User feedback to develop our existing services and future
            services.
            <br />
            5. Location of users by GPS (Country, State, Postcode) to provide a
            convenient environment to users i.e search by distance.
            <br />
            6. A user’s active swap information will prevent more than one swap
            at any one time (as this is not permitted).
            <br />
            7. A user’s previous swap information will be stored for future
            reference and convenience to request that property again.
            <br />
            8. All users’ information will be utilised to ensure our services
            work as intended. <br />
            <br />
            <span className={classes.subtitle}>How do we store your data?</span>
            <br />
            <br />
            Swaperty will store user data in our database and may also cache
            data in their browser (i.e cookies).
            <br />
            1. We strive to ensure database access is permitted only to
            authorised parties.
            <br />
            2. Sensitive information e.g. passwords will be stored following
            industry practices.
            <br />
            3. User data is saved in the database by classifying according to
            purpose and sort.
            <br />
            4. Users can close their accounts resulting in the deletion of their
            data at any time via our support team.
            <br />
            5. Users whose most recent login is more than one year will become
            dormant and their data will be deleted one year following this.
            <br />
            <br />
            <span className={classes.subtitle}>Marketing</span>
            <br />
            <br />
            1. Our company can send email(s) for advertising new services.
            <br />
            2. Dormant user’s may receive notification of their account closure
            and request they use our services again.
            <br />
            <br />
            <span className={classes.subtitle}>
              What are your data protection rights?
            </span>
            <br />
            <br /> Our Company (Swaperty) would like to make sure you are fully
            aware of all of your data protection rights. Every user is entitled
            to the following: <br />
            <br />
            <span className={classes.subtitle}>The right to access</span>
            --You have the right to request Our Company for copies of your
            personal data.
            <br />
            <span className={classes.subtitle}>The right to rectification</span>
            --You have the right to request that Our Company correct any
            information you believe is inaccurate. Additionally, you have the
            right to request Our Company to complete the information you believe
            is incomplete.
            <br />
            <span className={classes.subtitle}>The right to erasure</span>
            --You have the right to request that Our Company erase your personal
            data, under certain conditions.
            <br />
            <span className={classes.subtitle}>
              The right to restrict processing.
            </span>
            --You have the right to request that Our Company restrict the
            processing of your personal data, under certain conditions.
            <br />
            <span className={classes.subtitle}>
              The right to object to processing
            </span>
            --You have the right to object to Our Company’s processing of your
            personal data, under certain conditions.
            <br />
            <span className={classes.subtitle}>
              The right to data portability
            </span>
            --You have the right to request that Our Company transfer the data
            that we have collected to another organisation, or directly to you,
            under certain conditions.
            <br />
            <br />
            <span className={classes.subtitle}>Cookies</span>
            <br />
            <br />
            Cookies are text files placed on your computer to collect standard
            Internet log and visitor behaviour information. When you visit our
            web app, we may collect information from you automatically through
            cookies or similar technology. For further information, visit
            allaboutcookies.org.
            <br />
            <br />
            <span className={classes.subtitle}>How do we use cookies?</span>
            <br />
            <br />
            1. Use essential cookies to enable the basic operation of our web
            app.
            <br />
            2. Use operation cookies to make our web app operate per user
            preferences.
            <br />
            3. Use performance cookies to optimate our web app by providing
            interaction between user and web.
            <br />
            4. Except for the above cookies, we do not use any cookies.
            <br />
            <br />
            <span className={classes.subtitle}>How to manage cookies?</span>
            <br />
            <br />
            You can set your browser not to accept cookies, and the above
            website tells you how to remove cookies from your browser. However,
            in a few cases, some of our web app features may not function as a
            result.
            <br />
            <br />
            <span className={classes.subtitle}>How to contact us</span>
            <br />
            <br />
            If you have any questions, comments, suggestions or complaints about
            this Privacy Policy, you can call the customer service telephone
            number or email us at any time, and we will actively investigate,
            deal with and reply as soon as possible. Please feel free to contact
            us
            <br />
            <br />
            Email: admin@swaperty.com <br />
            Swaperty HQ, School of Computer Science, University of Birmingham,
            Birmingham, United Kingdom.
          </Text>
        </ScrollView>
      </SafeAreaView>
      <div
        style={{
          textAlign: "right",
          padding: "10px",
          fontWeight: "bolder",
        }}
      >
        <p>
          Accept?{" "}
          {user ? (<span>
            {" "}
            <input
              type="checkbox"
              checked={true}
              onChange={(e) => checkedHandler()}
            />
          </span>) : <span>
            {" "}
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => checkedHandler()}
            />
          </span>}
        </p>
      </div>
      <br />
      {user ? (<Link to='/'><div className={classes.actions}>
        <button>Go Home</button></div></Link>) : (
      isChecked ? (
        <Link to="/register">
          <div className={classes.actions}>
            <button>Go Signup</button>
          </div>
        </Link>
      ) : (
        <div className={classes.actions}>
          <small style={{ color: "red" }}>
            You should accept for moving next step
          </small>
          <br />
          <button>Go Signup</button>
        </div>
      ))}
    </div>
  );
}

export default GdprPage;
