//RXJS - distinctUntilChanged

import { distinctUntilChanged, Subject } from "rxjs";


const notifications$ = new Subject<any>();

notifications$
  .pipe(
    distinctUntilChanged((prev, curr) => prev.notificationId === curr.notificationId)
  )
  .subscribe(notification => {
    console.log('New notification received:', notification);
    // Perform actions based on the new notification
  });

// Emit some values for testing
notifications$.next({ notificationId: 1, message: 'Notification 1' });  // Output: "New notification received: { notificationId: 1, message: 'Notification 1' }"
notifications$.next({ notificationId: 1, message: 'Duplicate Notification 1' });  // No output (duplicate notificationId)
notifications$.next({ notificationId: 2, message: 'Notification 2' });  // Output: "New notification received: { notificationId: 2, message: 'Notification 2' }"
notifications$.next({ notificationId: 3, message: 'Notification 3' });  // Output: "New notification received: { notificationId: 3, message: 'Notification 3' }"
notifications$.next({ notificationId: 2, message: 'Notification 2 again' });  // Output: "New notification received: { notificationId: 2, message: 'Notification 2 again' 