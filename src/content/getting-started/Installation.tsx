import Callout from '../../assets/components/ui/Callout';
import CodeBlock from '../../assets/components/ui/CodeBlock';

export default function Installation() {
  const firebaseRules = `{
  "rules": {
    ".read": "auth != null && root.child('user_info/superadmin/' + auth.uid + '/role').val() === 'superadmin'",
    ".write": "auth != null && root.child('user_info/superadmin/' + auth.uid + '/role').val() === 'superadmin'",
      
    "user_info": {
      ".read": "auth != null",
      "partially_sighted": {
        ".read": "root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || auth != null",
        "$uid": {
          ".read": "$uid === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || root.child('user_info/caretaker/' + auth.uid + '/assignedPatients/' + $uid).val() === true",
          ".write": "$uid === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
          "emergencyContacts": {
            ".read": "$uid === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || root.child('user_info/caretaker/' + auth.uid + '/assignedPatients/' + $uid).val() === true",
            ".write": "$uid === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'"
          },
          "medicalInfo": {
            ".read": "$uid === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || root.child('user_info/caretaker/' + auth.uid + '/assignedPatients/' + $uid).val() === true",
            ".write": "$uid === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || root.child('user_info/caretaker/' + auth.uid + '/assignedPatients/' + $uid).val() === true"
          },
          "assignedCaretakers": {
            ".read": "$uid === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
            ".write": "$uid === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'"
          }
        }
      },
      "caretaker": {
        ".read": "auth != null",
        "$uid": {
          ".read": "$uid === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || root.child('user_info/partially_sighted/' + auth.uid + '/assignedCaretakers/' + $uid).val() === true",
          ".write": "$uid === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
          "assignedPatients": {
            "$patientId": {
              ".write": "$patientId === auth.uid || $uid === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'"
            }
          },
          "updatedAt": {
            ".write": "auth != null"
          }
        }
      },
      "mswd": {
        ".read": "root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || auth != null",
        "$uid": {
          ".read": "$uid === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
          ".write": "$uid === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'"
        }
      },
      "superadmin": {
        ".read": "auth != null",
        "$uid": {
          ".read": "$uid === auth.uid || root.child('user_info/superadmin/' + auth.uid + '/role').val() === 'superadmin'",
          ".write": "$uid === auth.uid || root.child('user_info/superadmin/' + auth.uid + '/role').val() === 'superadmin'"
        }
      }
    },
    "announcements": {
      ".read": "auth != null",
      ".write": "root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
      ".indexOn": ["timestamp", "targetAudience", "createdBy"],
      "$announcementId": {
        ".validate": "newData.hasChildren(['id', 'title', 'message', 'targetAudience', 'timestamp', 'createdBy', 'iconCodePoint', 'colorValue']) && newData.child('title').isString() && newData.child('message').isString() && newData.child('timestamp').isNumber()"
      }
    },
    "scanned_texts": {
      ".read": "auth != null",
      ".indexOn": ["timestamp"],
      "$userId": {
        ".read": "$userId === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || root.child('user_info/caretaker/' + auth.uid + '/assignedPatients/' + $userId).val() === true",
        ".write": "$userId === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
        ".indexOn": ["timestamp", "sourceType"],
        "$scanId": {
          ".validate": "newData.hasChildren(['userId', 'text', 'timestamp']) && newData.child('text').isString() && newData.child('userId').val() === $userId"
        }
      }
    },
    "detected_objects": {
      ".read": "auth != null",
      "$userId": {
        ".read": "$userId === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || root.child('user_info/caretaker/' + auth.uid + '/assignedPatients/' + $userId).val() === true",
        ".write": "$userId === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
        ".indexOn": ["timestamp", "createdAt"],
        "$detectionId": {
          ".validate": "newData.hasChildren(['userId', 'objects', 'objectCount', 'timestamp', 'createdAt']) && newData.child('userId').val() === $userId && newData.child('objectCount').isNumber()"
        }
      }
    },
    "detected_faces": {
      ".read": "auth != null",
      "$userId": {
        ".read": "$userId === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || root.child('user_info/caretaker/' + auth.uid + '/assignedPatients/' + $userId).val() === true",
        ".write": "$userId === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
        ".indexOn": ["timestamp", "createdAt"],
        "$detectionId": {
          ".validate": "newData.hasChildren(['userId', 'faces', 'faceCount', 'timestamp', 'createdAt']) && newData.child('userId').val() === $userId && newData.child('faceCount').isNumber()"
        }
      }
    },
    "user_locations": {
      ".read": "root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
      "partially_sighted": {
        ".read": "root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || auth != null",
        ".indexOn": ["timestamp", "lastUpdated", "lastUpdateMillis"],
        "$patientId": {
          ".read": "$patientId === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || root.child('user_info/caretaker/' + auth.uid + '/assignedPatients/' + $patientId).val() === true",
          ".write": "$patientId === auth.uid",
          ".validate": "newData.hasChildren(['latitude', 'longitude', 'timestamp', 'accuracy'])"
        }
      },
      "caretaker": {
        ".read": "root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || auth != null",
        ".indexOn": ["timestamp", "lastUpdated", "lastUpdateMillis"],
        "$caretakerId": {
          ".read": "$caretakerId === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || root.child('user_info/partially_sighted/' + auth.uid + '/assignedCaretakers/' + $caretakerId).val() === true",
          ".write": "$caretakerId === auth.uid",
          ".validate": "newData.hasChildren(['latitude', 'longitude', 'timestamp', 'accuracy'])"
        }
      }
    },
    "assistance_requests": {
      ".read": "auth != null",
      ".indexOn": ["caretakerId", "patientId", "status", "timestamp"],
      "$requestId": {
        ".write": "auth != null && (!data.exists() || data.child('patientId').val() === auth.uid || data.child('caretakerId').val() === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin')"
      }
    },
    "request_transactions": {
      ".read": "root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
      ".write": "auth != null",
      ".indexOn": ["requestId", "caretakerId", "patientId", "status", "timestamp", "action"],
      "$transactionId": {
        ".validate": "newData.hasChildren(['requestId', 'caretakerId', 'patientId', 'action', 'status', 'timestamp']) && newData.child('timestamp').isNumber()"
      }
    },
    
    "emergency_hotlines": {
      "$uid": {
        ".read": "$uid === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
        ".write": "$uid === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
        "$hotlineId": {
          ".validate": "newData.hasChildren(['id', 'departmentName', 'phoneNumber', 'address', 'iconCode', 'colorValue'])"
        }
      }
    },
    "global_emergency_hotlines": {
      ".read": "auth != null",
      ".write": "root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'"
    },
    
    "activity_logs": {
      ".read": "root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || root.child('user_info/superadmin/' + auth.uid + '/role').val() === 'superadmin'",
      ".write": "auth != null",
      ".indexOn": ["userId", "action", "timestamp"],
      "$logId": {
        ".validate": "newData.hasChildren(['userId', 'action', 'timestamp'])"
      }
    },
    "recent_activities": {
      "$userId": {
        ".read": "$userId === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin' || root.child('user_info/caretaker/' + auth.uid + '/assignedPatients/' + $userId).val() === true",
        ".write": "$userId === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
        ".indexOn": ["timestamp", "activityType"],
        "$activityId": {
          ".validate": "newData.hasChildren(['title', 'description', 'activityType', 'timestamp'])"
        }
      }
    },
    "caretaker_communication": {
      "calls": {
        ".read": "auth != null",
        ".write": "auth != null",
        ".indexOn": ["callerId", "receiverId", "timestamp"],
        "$callId": {
          ".read": "data.child('callerId').val() === auth.uid || data.child('receiverId').val() === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
          ".write": "!data.exists() || data.child('callerId').val() === auth.uid || data.child('receiverId').val() === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
          ".validate": "newData.hasChildren(['callerId', 'receiverId', 'timestamp']) && newData.child('timestamp').isNumber()"
        }
      },
      "messages": {
        ".read": "auth != null",
        ".write": "auth != null",
        ".indexOn": ["senderId", "receiverId", "conversationId", "timestamp"],
        "$messageId": {
          ".read": "data.child('senderId').val() === auth.uid || data.child('receiverId').val() === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
          ".write": "data.child('senderId').val() === auth.uid || !data.exists()",
          ".validate": "newData.hasChildren(['senderId', 'receiverId', 'text', 'timestamp']) && newData.child('text').isString() && newData.child('timestamp').isNumber()"
        }
      },
      "conversations": {
        ".read": "auth != null",
        ".write": "auth != null",
        ".indexOn": ["participant1", "participant2", "lastMessageTime"],
        "$conversationId": {
          ".read": "data.child('participant1').val() === auth.uid || data.child('participant2').val() === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
          ".write": "data.child('participant1').val() === auth.uid || data.child('participant2').val() === auth.uid || !data.exists()",
          ".validate": "newData.hasChildren(['participant1', 'participant2']) && newData.child('participant1').val() !== newData.child('participant2').val()"
        }
      }
    },
    "partially_sighted_communication": {
      "calls": {
        ".read": "auth != null",
        ".write": "auth != null",
        ".indexOn": ["callerId", "receiverId", "timestamp"],
        "$callId": {
          ".read": "data.child('callerId').val() === auth.uid || data.child('receiverId').val() === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
          ".write": "!data.exists() || data.child('callerId').val() === auth.uid || data.child('receiverId').val() === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
          ".validate": "newData.hasChildren(['callerId', 'receiverId', 'timestamp']) && newData.child('timestamp').isNumber()"
        }
      },
      "messages": {
        ".read": "auth != null",
        ".write": "auth != null",
        ".indexOn": ["senderId", "receiverId", "conversationId", "timestamp"],
        "$messageId": {
          ".read": "data.child('senderId').val() === auth.uid || data.child('receiverId').val() === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
          ".write": "data.child('senderId').val() === auth.uid || !data.exists()",
          ".validate": "newData.hasChildren(['senderId', 'receiverId', 'text', 'timestamp']) && newData.child('text').isString() && newData.child('timestamp').isNumber()"
        }
      },
      "conversations": {
        ".read": "auth != null",
        ".write": "auth != null",
        ".indexOn": ["participant1", "participant2", "lastMessageTime"],
        "$conversationId": {
          ".read": "data.child('participant1').val() === auth.uid || data.child('participant2').val() === auth.uid || root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
          ".write": "data.child('participant1').val() === auth.uid || data.child('participant2').val() === auth.uid || !data.exists()",
          ".validate": "newData.hasChildren(['participant1', 'participant2']) && newData.child('participant1').val() !== newData.child('participant2').val()"
        }
      }
    },
    "mswd_communication": {
      "calls": {
        ".read": "root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
        ".write": "root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
        ".indexOn": ["callerId", "receiverId", "timestamp", "userRole"],
        "$callId": {
          ".validate": "newData.hasChildren(['callerId', 'receiverId', 'timestamp', 'userRole']) && newData.child('timestamp').isNumber() && newData.child('callerId').val() === auth.uid"
        }
      },
      "call_logs": {
        ".read": "root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
        ".write": "root.child('user_info/mswd/' + auth.uid + '/role').val() === 'admin'",
        ".indexOn": ["mswdId", "userId", "timestamp", "callType"],
        "$logId": {
          ".validate": "newData.hasChildren(['mswdId', 'userId', 'userName', 'userRole', 'phoneNumber', 'timestamp']) && newData.child('mswdId').val() === auth.uid"
        }
      }
    }
  }
}`;

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10 animate-in fade-in duration-500 pb-16">
      
      {/* Intro Header */}
      <section id="installation" className="space-y-4 pb-8 border-b border-slate-200">
        <div className="text-sm text-slate-500 font-medium mb-2">
          Getting Started / System Installation
        </div>

        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          Installation & Setup
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          A comprehensive guide for developers to run the Seelai Flutter application locally, 
          bind it to Firebase, and configure the necessary backend rules.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Flutter SDK</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Dart</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Firebase CLI</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Realtime Database</span>
        </div>
      </section>

      {/* Action Card */}
      <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-semibold text-slate-900">Seelai GitHub Repository</h3>
          <p className="text-sm text-slate-500 mt-1">Access the source code to build and run the application.</p>
        </div>
        <a 
          href="https://github.com/onetwothird/Seelai-App.git" 
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap px-5 py-2.5 bg-[#9167b4] hover:bg-[#7f5a9e] text-white text-sm font-medium rounded-lg transition-colors shadow-sm cursor-pointer"
        >
          View Source Code
        </a>
      </div>

      {/* Prerequisites */}
      <section id="prerequisites" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Prerequisites</h2>
        <ul className="list-disc list-inside space-y-3 text-slate-600 bg-slate-50 p-6 rounded-xl border border-slate-200">
          <li><strong className="text-slate-900">Flutter SDK:</strong> Ensure you have the latest stable release.</li>
          <li><strong className="text-slate-900">Firebase CLI:</strong> Required for database and auth linking.</li>
          <li><strong className="text-slate-900">Physical Device:</strong> TFLite and camera features perform poorly on emulators. Connect a real Android/iOS device.</li>
        </ul>
      </section>

      {/* Environment Setup */}
      <section id="environment-setup" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Environment Setup</h2>
        <p className="text-slate-600">Clone the repository via HTTPS and install the required dependencies:</p>
        <CodeBlock 
          language="bash"
          code={`# Clone the repository
git clone https://github.com/onetwothird/Seelai-App.git
cd Seelai-App

# Install dependencies
flutter pub get`}
        />
      </section>

      {/* Firebase Configuration */}
      <section id="firebase-config" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Firebase Configuration</h2>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 mb-4 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-3 border-b border-slate-100 pb-2">Active Project Details</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><strong className="text-slate-900">Project Name:</strong> seelai</li>
            <li><strong className="text-slate-900">Project ID:</strong> seelai-4b026</li>
            <li><strong className="text-slate-900">Services Used:</strong> Firebase Authentication, Firebase Realtime Database, Firebase Storage</li>
          </ul>
        </div>

        <Callout type="warning" title="Important Configuration Note">
          The application is currently connected to the <b>seelai-4b026</b> project. Ensure your CLI is logged into the correct authorized Google account before generating configuration files.
        </Callout>
        
        <p className="text-slate-600 mt-6">Run the following command in your terminal to bind your Firebase project locally:</p>
        <CodeBlock 
          language="bash"
          code={`flutterfire configure --project=seelai-4b026`}
        />
      </section>

      {/* Realtime Database Rules */}
      <section id="database-rules" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Realtime Database Rules</h2>
        <p className="text-slate-600 mb-2">
          Seelai utilizes comprehensive security rules to segregate access between Partially Sighted users, Caretakers, MSWD Admins, and Superadmins. Ensure these are published in your Firebase Console:
        </p>
        
        {/* Added background color and child selectors to strip inner margins/rounding */}
        <div className="max-h-125rflow-hidden overflow-y-auto rounded-xl border border-slate-200 shadow-sm bg-slate-900 *:m-0! *:rounded-none! [&_pre]:m-0! [&_pre]:rounded-none!">
          <CodeBlock 
            language="json"
            code={firebaseRules}
          />
        </div>
      </section>

    </div>
  );
}