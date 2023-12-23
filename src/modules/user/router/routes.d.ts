import "vue-router";
declare const route: {
    path: "/user";
    component: () => Promise<typeof import("@/layouts/MainLayout/Index.vue")>;
    beforeEnter: (to: any, from: any, next: any) => Promise<void>;
    children: ({
        path: "/user";
        component: () => Promise<typeof import("@/modules/user/views/UserIndex.vue")>;
        meta: {
            title: string;
            showChildrenInMenu: boolean;
            icon: import("@ant-design/icons-vue/lib/icons/DashboardOutlined").DashboardOutlinedIconType;
            collapse?: undefined;
        };
        children?: undefined;
    } | {
        path: "/user/letter";
        component: () => Promise<typeof import("@/shared/PageParent.vue")>;
        meta: {
            title: string;
            showChildrenInMenu: boolean;
            collapse: boolean;
            icon: import("@ant-design/icons-vue/lib/icons/ProjectOutlined").ProjectOutlinedIconType;
        };
        children: ({
            path: "/user/letter/confirm-studying";
            component: () => Promise<typeof import("@/modules/user/views/ConfirmStudying.vue")>;
            meta: {
                title: string;
            };
        } | {
            path: "/user/letter/enjoy-policy";
            component: () => Promise<typeof import("@/modules/user/views/EnjoyPolicy.vue")>;
            meta: {
                title: string;
            };
        } | {
            path: "/user/letter/bank-loan";
            component: () => Promise<typeof import("@/modules/user/views/BankLoan.vue")>;
            meta: {
                title: string;
            };
        } | {
            path: "/user/letter/renew-student-card";
            component: () => Promise<typeof import("@/modules/user/views/RenewStudentCard.vue")>;
            meta: {
                title: string;
            };
        } | {
            path: "/user/letter/re-issuance-transcript";
            component: () => Promise<typeof import("@/modules/user/views/ReIssuanceTranscripts.vue")>;
            meta: {
                title: string;
            };
        } | {
            path: "/user/letter/reservation-acacdemic-result";
            component: () => Promise<typeof import("@/modules/user/views/ReservationAcademicResult.vue")>;
            meta: {
                title: string;
            };
        } | {
            path: "/user/letter/bus-tickets-register";
            component: () => Promise<typeof import("@/modules/user/views/ContinueStudying.vue")>;
            meta: {
                title: string;
            };
        } | {
            path: "/user/letter/resignation-studying";
            component: () => Promise<typeof import("@/modules/user/views/ResignationStudying.vue")>;
            meta: {
                title: string;
            };
        })[];
    })[];
};
export default route;
