@@ .. @@
   isBeverageMenuOpen: boolean;
   isPaymentOpen: boolean;
+  showOrderNotification: boolean;
 }
 
 type AppAction = 
@@ .. @@
   | { type: 'TOGGLE_BEVERAGE_MENU' }
   | { type: 'TOGGLE_PAYMENT' }
+  | { type: 'SHOW_ORDER_NOTIFICATION' }
+  | { type: 'HIDE_ORDER_NOTIFICATION' }
   | { type: 'LOAD_CART'; payload: CartItem[] };
 
 const initialState: AppState = {
@@ .. @@
   ],
   isBeverageMenuOpen: false,
-  isPaymentOpen: false
+  isPaymentOpen: false,
+  showOrderNotification: false
 };
 
 const appReducer = (state: AppState, action: AppAction): AppState => {
@@ .. @@
     case 'TOGGLE_PAYMENT':
       return { ...state, isPaymentOpen: !state.isPaymentOpen };
+    case 'SHOW_ORDER_NOTIFICATION':
+      return { ...state, showOrderNotification: true };
+    case 'HIDE_ORDER_NOTIFICATION':
+      return { ...state, showOrderNotification: false };
     case 'LOAD_CART':
       return { ...state, cart: action.payload };
     default: