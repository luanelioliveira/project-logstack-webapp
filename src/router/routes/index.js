import SignInView from "@/views/Auth/SignIn/SignInView";
import SignUpView from "@/views/Auth/SignUp/SignUpView";
import LogsView from "@/views/Logs/LogsView";
import LogsDetailView from "@/views/Logs/LogsDetailView";
import TriggersView from "@/views/Triggers/TriggersView";
import AlertsView from "@/views/Alerts/AlertsView";
import LogsGenerateView from "@/views/Logs/GenerateView";

export default [
  {
    path: '*',
    redirect: '/sign-in'
  },  
  {
    path: '/',
    redirect: '/sign-in'
  },
  {
    path: "/sign-in",
    name: "signin",
    component: SignInView
  },
  {
    path: "/sign-up",
    name: "signup",
    component: SignUpView
  },
  {
    path: "/logs",
    name: "logs",
    component: LogsView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/logs/:id",
    props: true,
    name: "logsdetail",
    component: LogsDetailView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/triggers",
    name: "triggers",
    component: TriggersView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/alerts",
    name: "alerts",
    component: AlertsView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/logs-generate",
    name: "logsGenerate",
    component: LogsGenerateView,
    meta: {
      requiresAuth: true
    }
  }
]
