@@ .. @@
     
     alert(message);
     dispatch({ type: 'CLEAR_CART' });
     dispatch({ type: 'TOGGLE_PAYMENT' });
     dispatch({ type: 'TOGGLE_CART' });
+    
+    // Mostrar notificação de pedido sendo preparado
+    setTimeout(() => {
+      dispatch({ type: 'SHOW_ORDER_NOTIFICATION' });
+    }, 500);
   };